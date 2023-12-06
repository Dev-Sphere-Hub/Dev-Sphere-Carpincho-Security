import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { tryCatch } from '../utils/tryCatch.js';
import { sendResponse } from '../utils/responses.js';

const TOKEN_EXPIRATION = process.env.TOKEN_EXPIRATION || '24h';

export const createUser = tryCatch(async(req, res) => {
    const { name, lastname, documentId, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    const existingUserDocumentId = await User.findOne({ documentId });
    if (existingUser) {
        return res.status(409).json({ error: 'El correo ya está registrado' });
    }
    if (existingUserDocumentId) {
        return res.status(409).json({ error: 'Ya existe un usuario registrado con el número de documento ingresado' });
    }
    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const fullName = name.concat(' ', lastname);
    const newUser = new User({
        fullName,
        documentId,
        email: email.toLowerCase(),
        password: hashedPassword,
    });

    await newUser.save();

    const secretKey = process.env.SECRET_KEY;

    const token = jwt.sign({ userId: newUser._id }, secretKey, { expiresIn: TOKEN_EXPIRATION });

    sendResponse(res, 201, 'Usuario creado con éxito.', { token });
});

export const login = tryCatch(async(req, res) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        return res.status(401).json({ error: 'No existe un usuario con el correo ingresado.' });
    }
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordValid) {
        return res.status(409).json({ error: 'Credenciales incorrectas.' });
    }
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign({ userId: existingUser._id }, secretKey, { expiresIn: TOKEN_EXPIRATION });
    sendResponse(res, 200, 'Inicio de sesión exitoso.', { token });
})

export const recoverPassword = tryCatch(async(req, res) => {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        return res.status(401).json({ error: 'No existe un usuario con el correo ingresado.' });
    }
    /*TODO - Enviar correo electrónico con un enlace con tiempo de expiración para el cambio de contraseña*/
    sendResponse(res, 200, `Se ha enviado un código de verificación. Por favor, verifica tu bandeja de entrada.`);
})