import User from '../models/user';
import { tryCatch } from '../utils/tryCatch';
import { sendResponse } from '../utils/responses';

export const createUser = tryCatch(async(req, res) => {
    const { type, fullName, email, password, documentId, phone, photoUrl, address } = req.body;
    sendResponse(res, 200, 'Usuario registrado con éxito');
});