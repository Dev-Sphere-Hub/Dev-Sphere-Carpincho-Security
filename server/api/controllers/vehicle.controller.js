import Vehicle from '../models/vehicle.js';
import { tryCatch } from '../utils/tryCatch.js';
import { sendResponse } from '../utils/responses.js';
import uploadImage from '../utils/images.js';

export const createVehicle = tryCatch(async(req, res) => {
    const { plateCode, carInsurance, details } = req.body;
    const existingVehicle = await Vehicle.findOne({ plateCode });
    if (existingVehicle) {
        return sendResponse(res, 400, 'Ya existe un vehículo registrado con la placa ingresada.');;
    }
    if (!plateCode || !carInsurance || !details) {
        return sendResponse(res, 400, 'Faltan datos obligatorios');
    }
    if (req.files) {
        const { image } = req.files;
        const fileTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (!fileTypes.includes(image.mimetype)) sendResponse(res, 400, 'Image formats supported: JPG, PNG, JPEG.');
        const images = await uploadImage(image.tempFilePath);
        const newVehicle = new Vehicle({
            plateCode: plateCode.toUpperCase(),
            carInsurance: carInsurance.toUpperCase(),
            photo: images.secure_url,
            details
        });
        await newVehicle.save();
        sendResponse(res, 200, 'Vehículo registrado con éxito.');
    } else {
        const newVehicle = new Vehicle({
            plateCode: plateCode.toUpperCase(),
            carInsurance: carInsurance.toUpperCase(),
            details
        });
        await newVehicle.save();
        sendResponse(res, 200, 'Vehículo registrado con éxito.');
    }
});

export const getAllVehicles = tryCatch(async(req, res) => {
    const vehicles = await Vehicle.find();
    if (vehicles.length == 0) {
        return sendResponse(res, 404, 'No se encontraron vehículos.')
    }
    sendResponse(res, 200, 'Vehículos encontrados.', vehicles)
})

export const getVehicleById = tryCatch(async(req, res) => {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) {
        return sendResponse(res, 404, 'Vehículo no encontrada.');
    }
    sendResponse(res, 200, 'Vehículo encontrada con éxito.', vehicle);
})