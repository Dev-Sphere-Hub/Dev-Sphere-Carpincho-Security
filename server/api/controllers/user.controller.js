import Jwt from "jsonwebtoken";
import User from '../models/user.js';
import { tryCatch } from '../utils/tryCatch.js';
import { sendResponse } from '../utils/responses.js';
import uploadImage from '../utils/images.js';

export const createUser = tryCatch(async(req, res) => {
    const { type, fullName, email, password, documentId, phone, photoUrl, address } = req.body;
    sendResponse(res, 200, 'Usuario registrado con éxito');
});

export const updateUser = tryCatch(async(req, res) => {
    let {...updatedFields } = req.body;
    const vars = ['type', 'email', 'documentId', 'password', 'is_authorized']
    for (let prop in vars) {
        if (updatedFields.hasOwnProperty(vars[prop])) {
            delete updatedFields[vars[prop]];
            return sendResponse(res, 200, 'El cambio de $vars[prop] no está permitido, comunícate con el administrador.');
        }
    }
    if (req.files) {
        const { image } = req.files;
        const fileTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (!fileTypes.includes(image.mimetype)) sendResponse(res, 400, 'Image formats supported: JPG, PNG, JPEG.');
        const images = await uploadImage(image.tempFilePath);
        updatedFields.photoUrl = images.secure_url;
        const updatedUser = await User.findByIdAndUpdate(req.params.id, updatedFields, { new: true });
        if (!updatedUser) {
            return sendResponse(res, 404, 'Usuario no encontrado.');
        }
        return sendResponse(res, 200, 'Usuario actualizado con éxito.');
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, updatedFields, { new: true });
    if (!updatedUser) {
        return sendResponse(res, 404, 'Usuario no encontrado.');
    }
    sendResponse(res, 200, 'Usuario actualizado con éxito.', updatedUser);
});

export const deleteUser = tryCatch(async(req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
        return sendResponse(res, 404, 'Usuario no encontrado.');
    }
    sendResponse(res, 204, 'Usuario eliminado.');
});

export const profile = tryCatch(async(req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return sendResponse(res, 401, 'Acceso denegado. No está autorizado.')
    }

    const token = authHeader.split(' ')[1];

    const secretKey = process.env.SECRET_KEY;

    const payload = Jwt.verify(token, secretKey);
    const userData = await User.findOne({
        _id: payload.userId
    }).select('-password');
    sendResponse(res, 200, 'Perfil del usuario obtenido con éxito.', userData);
});