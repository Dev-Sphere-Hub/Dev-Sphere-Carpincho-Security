import User from '../models/user';
import { tryCatch } from '../utils/tryCatch';
import { sendResponse } from '../utils/responses';

export const createUser = tryCatch(async(req, res) => {
    const { type, fullName, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        const error = ErrorApp('El correo electrónico ya está en uso', 409);
        throw error;
    }
    sendResponse(res, 200, 'Usuario registrado con éxito');
});