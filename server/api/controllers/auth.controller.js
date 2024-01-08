import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import mongoose from 'mongoose';
import { tryCatch } from '../utils/tryCatch.js';
import { sendResponse } from '../utils/responses.js';
import { sendEmail } from '../utils/email.js';
const TOKEN_EXPIRATION = process.env.TOKEN_EXPIRATION || '24h';
const FRONTEND_URL = process.env.FRONTEND_URL;

export const createUser = tryCatch(async(req, res) => {
    //const { name, lastname, documentId, phone, email, password } = req.body;
    const {...userFields } = req.body;
    const ema = req.body.email;
    console.log(ema);
    const docuId = req.body.documentId;
    const existingUser = await User.findOne({ email: ema });
    const existingUserDocumentId = await User.findOne({ docuId });
    if (existingUser) {
        throw sendResponse(res, 400, 'El correo ya está registrado.');
    }
    if (existingUserDocumentId) {
        throw sendResponse(res, 400, 'Ya existe un usuario registrado con el número de documento ingresado.');
    }
    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const fullName = userFields.name.concat(' ', userFields.lastname);
    userFields.fullName = fullName;
    userFields.email = userFields.email.toLowerCase();
    userFields.password = hashedPassword;

    const newUser = new User(userFields);

    await newUser.save();

    const secretKey = process.env.SECRET_KEY;

    const token = jwt.sign({ userId: newUser._id }, secretKey, { expiresIn: TOKEN_EXPIRATION });

    sendResponse(res, 201, 'Se ha registrado correctamente.', { token });
});

export const login = tryCatch(async(req, res) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        return sendResponse(res, 401, 'No existe un usuario con el correo ingresado.');
    }
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordValid) {
        return sendResponse(res, 409, 'Credenciales incorrectas.');
    }
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign({ userId: existingUser._id }, secretKey, { expiresIn: TOKEN_EXPIRATION });
    sendResponse(res, 200, 'Inicio de sesión exitoso.', { token });
})

export const recoverPassword = tryCatch(async(req, res) => {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        return sendResponse(res, 401, 'No existe un usuario con el correo ingresado.');
    }
    /*TODO - Enviar correo electrónico con un enlace con tiempo de expiración para el cambio de contraseña*/
    const templatePath = 'api/public/mails/recover_password.html';
    const templateContent = fs.readFileSync(templatePath, 'utf8');
    const fullname = existingUser.fullName;
    const recoverPasswordLink = `${FRONTEND_URL}/reset-password/${existingUser._id}`;

    const emailContent = templateContent
        .replace('[Nombre del Cliente]', fullname)
        .replace('[Link de restablecimiento]', recoverPasswordLink)

    // Envía el correo de recuperación con el código de verificación utilizando la función sendEmail
    await sendEmail(email, 'Recuperación de contraseña', emailContent);

    // Respondemos con un mensaje de éxito
    sendResponse(res, 200, `Se ha enviado un mensaje con instrucciones para restablecer tu contraseña. Por favor, verifica tu bandeja de entrada.`);
})

export const resetPassword = tryCatch(async(req, res) => {
    const newPassword = req.body.newPassword;
    const id = req.params;
    const user = await User.findById(new mongoose.Types.ObjectId(id));
    if (!user) {
        return sendResponse(404, 'No existe una cuenta asociada al correo electrónico enviado.')
    }
    const encryptedNewPassword = await bcrypt.hash(newPassword, 10);
    await User.findByIdAndUpdate({
        _id: new mongoose.Types.ObjectId(user._id)
    }, { password: encryptedNewPassword });
    sendResponse(res, 200, 'Contraseña actualizada exitosamente!.');
})