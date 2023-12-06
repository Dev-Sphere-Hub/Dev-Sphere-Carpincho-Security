import Visit from '../models/visit.js';
import { tryCatch } from '../utils/tryCatch.js';
import { sendResponse } from '../utils/responses.js';

export const registerVisit = tryCatch(async(req, res) => {
    sendResponse(res, 200, 'Visita registrado con éxito');
});