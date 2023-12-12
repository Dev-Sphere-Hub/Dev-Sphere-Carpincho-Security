import New from '../models/new.js';
import User from '../models/user.js';
import { tryCatch } from '../utils/tryCatch.js';
import { sendResponse } from '../utils/responses.js';

export const registerNew = tryCatch(async(req, res) => {
    const { category, detail, date } = req.body;
    if (!category || !detail || !date) {
        return sendResponse(res, 400, 'Faltan datos obligatorios.');
    }
    const idUserAuthenticated = req.user.userId;
    const existingUser = await User.findById(idUserAuthenticated);
    const newNotice = new New({
        category: category,
        detail: detail,
        date: date,
        author: existingUser._id
    });
    await newNotice.save();
    sendResponse(res, 200, 'Novedad registrada con éxito.');
});

export const updateNew = tryCatch(async(req, res) => {
    const {...allFields } = req.body;

    // Verificar si hay otros campos presentes en el cuerpo de la solicitud
    if (Object.keys(allFields).length <= 0) {
        return sendResponse(res, 400, 'Faltan datos obligatorios.');
    }
    if (allFields.hasOwnProperty('author')) {
        delete allFields['author'];
    }

    const updatedNew = await New.findByIdAndUpdate(req.params.id, { allFields }, { new: true });
    if (!updatedNew) {
        return sendResponse(res, 404, 'Novedad no encontrada.');
    }
    sendResponse(res, 200, 'Novedad actualizada con éxito.', updatedNew);
});


export const getAllNews = tryCatch(async(req, res) => {
    const news = await New.find().populate({ path: 'author', select: '-password' });
    sendResponse(res, 200, 'Novedades encontradas con éxito.', news);
});

export const getNewById = tryCatch(async(req, res) => {
    const news = await New.findById(req.params.id);
    if (!news) {
        return sendResponse(res, 404, 'Novedad no encontrada.');
    }
    sendResponse(res, 200, 'Novedad encontrada con éxito', news);
});

// Controlador para eliminar una visita por ID
export const deleteNew = tryCatch(async(req, res) => {
    const news = await New.findByIdAndDelete(req.params.id);
    if (!news) {
        return sendResponse(res, 404, 'Novedad no encontrada.');
    };
    sendResponse(res, 204);
});