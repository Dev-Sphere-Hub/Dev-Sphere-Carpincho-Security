import Vehicle from '../models/vehicle';
import { tryCatch } from '../utils/tryCatch';
import { sendResponse } from '../utils/responses';

export const createVehicle = tryCatch(async(req, res) => {
    sendResponse(res, 200, 'Vehículo registrado con éxito');
});