import CourierService from '../models/courierService.js';
import { tryCatch } from '../utils/tryCatch.js';
import { sendResponse } from '../utils/responses.js';
import uploadImage from '../utils/images.js';

// Controlador para crear un nuevo paquete
export const createCourierService = tryCatch(async(req, res) => {
    const { type, recipient, deliverer, photoURL, description, status } = req.body;

    // Validar datos
    if (!type || !recipient || !deliverer || !description) {
        return sendResponse(res, 400, 'Todos los campos son obligatorios');
    }

    // Verificar si el estado es válido
    if (status && !['received', 'delivered'].includes(status)) {
        return sendResponse(res, 400, 'El estado debe ser "received" o "delivered"');
    }

    // Verificar si el paquete existe, si es asi manda un error si no prosigue
    const existingCourierService = await CourierService.findOne({ recipient, deliverer, description });
    if (existingCourierService) {
        return sendResponse(res, 400, 'El paquete ya existe');
    }

    if (req.files) {
        const { image } = req.files;
        const fileTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (!fileTypes.includes(image.mimetype)) sendResponse(res, 400, 'Formatos de imagen soportados: JPG, PNG, JPEG.');
        const images = await uploadImage(image.tempFilePath);
        const newCourierService = new CourierService({
            type,
            recipient,
            deliverer,
            description,
            recordedBy: req.user.userId,
            status
        });
        newCourierService.photoURL = images.secure_url;
        await newCourierService.save();
        return sendResponse(res, 200, 'Paquete registrada con éxito.');
    }
    const newCourierService = new CourierService({
        type,
        recipient,
        deliverer,
        description,
        recordedBy: req.user.userId,
        status
    });
    await newCourierService.save();
    sendResponse(res, 201, 'Paquete registrado con éxito', newCourierService);
});

// Controlador para obtener todos los paquetes
export const getAllCourierServices = tryCatch(async(req, res) => {
    const CourierServices = await CourierService.find().populate({ path: 'recipient', select: 'fullName' }).populate({ path: 'recordedBy', select: 'fullName' });
    sendResponse(res, 200, 'Lista de paquetes', CourierServices);
});

// Controlador para obtener un paquete por ID
export const getCourierServiceById = tryCatch(async(req, res) => {
    const CourierServiceByID = await CourierService.findById(req.params.id);
    if (!CourierServiceByID) {
        return sendResponse(res, 404, 'Paquete no encontrado');
    }
    sendResponse(res, 200, 'Detalle del paquete', CourierServiceByID);
});

// Controlador para actualizar un paquete por ID
export const updateCourierServiceById = tryCatch(async(req, res) => {
    const { status, ...restBody } = req.body;

    if (Object.keys(restBody).length > 0) {
        return sendResponse(res, 400, 'Solo se permite la actualización del estado');
    }

    if (!status) {
        return sendResponse(res, 400, 'El estado es obligatorio');
    }

    // Verificar si el estado es válido
    if (status && !['received', 'delivered'].includes(status)) {
        return sendResponse(res, 400, 'El estado debe ser "received" o "delivered"');
    }

    const updatedCourierService = await CourierService.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!updatedCourierService) {
        return sendResponse(res, 404, 'Paquete no encontrado');
    }
    sendResponse(res, 200, 'Paquete actualizado con éxito', updatedCourierService);
});

// Controlador para eliminar un paquete por ID
export const deleteCourierService = tryCatch(async(req, res) => {
    const deletedCourierService = await CourierService.findByIdAndDelete(req.params.id);
    if (!deletedCourierService) {
        return sendResponse(res, 404, 'Paquete no encontrado');
    }
    sendResponse(res, 204, 'Paquete eliminado con éxito');
});