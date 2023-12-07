import Jwt from "jsonwebtoken";
import User from '../models/user.js';
import { tryCatch } from '../utils/tryCatch.js';
import { sendResponse } from '../utils/responses.js';

export const createUser = tryCatch(async(req, res) => {
    const { type, fullName, email, password, documentId, phone, photoUrl, address } = req.body;
    sendResponse(res, 200, 'Usuario registrado con éxito');
});

export const profile = tryCatch(async(req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Acceso no autorizado. Token no proporcionado' });
    }

    const token = authHeader.split(' ')[1];

    const secretKey = process.env.SECRET_KEY;

    const payload = Jwt.verify(token, secretKey);
    const userData = await User.findOne({
        _id: payload.userId
    }).select('-password');
    sendResponse(res, 200, 'Perfil del usuario obtenido con éxito.', userData);
});