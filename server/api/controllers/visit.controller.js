import Visit from '../models/visit';
import { tryCatch } from '../utils/tryCatch';
import { sendResponse } from '../utils/responses';

export const registerVisit = tryCatch(async(req, res) => {
    sendResponse(res, 200, 'Visita registrado con éxito');
});