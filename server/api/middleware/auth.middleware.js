import jwt from 'jsonwebtoken';
import { tryCatch } from '../utils/tryCatch.js';

export const checkAuthentication = tryCatch((req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Acceso no autorizado. Token no proporcionado' });
    }

    const token = authHeader.split(' ')[1];

    const secretKey = process.env.SECRET_KEY;

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Acceso no autorizado. Token inválido.' });
        }

        req.user = decoded;

        next();
    });
});