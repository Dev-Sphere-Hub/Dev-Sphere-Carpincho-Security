import Package from '../models/package';
import { tryCatch } from '../utils/tryCatch';
import { sendResponse } from '../utils/responses';

export const registerPackage = tryCatch(async(req, res) => {
    sendResponse(res, 200, 'Paquete registrado con éxito');
});