import CourierService from '../models/courierService';
import { tryCatch } from '../utils/tryCatch';
import { sendResponse } from '../utils/responses';

// Controlador para crear un nuevo paquete
export const createCourierService = tryCatch(async (req, res) => {
  const { type, recipient, deliverer, photoURL, description, recordedBy, status } = req.body;

  // Validar datos
  if (!type || !recipient || !deliverer || !photoURL || !description) {
    return sendResponse(res, 400, 'Todos los campos son obligatorios');
  }

  // Verificar si el estado es válido
  if (status && !['received', 'delivered'].includes(status)) {
    return sendResponse(res, 400, 'El estado debe ser "received" o "delivered"');
  }

  // Verificar si el usuario grabador (recordedBy) existe si se proporciona
  if (recordedBy) {
    const userRecordedByExists = await User.exists({ _id: recordedBy });
    if (!userRecordedByExists) {
      return sendResponse(res, 400, 'El usuario que registra no existe');
    }
  }

  const newCourierService = new CourierService({
    type,
    recipient,
    deliverer,
    photoURL,
    description,
    recordedBy,
    status
  });

  await newCourierService.save();
  sendResponse(res, 201, 'Paquete registrado con éxito', newPackage);
});

// Controlador para obtener todos los paquetes
export const getAllCourierServices = tryCatch(async (req, res) => {
  const CourierServices = await CourierService.find();
  sendResponse(res, 200, 'Lista de paquetes', CourierServices);
});

// Controlador para obtener un paquete por ID
export const getCourierServiceById = tryCatch(async (req, res) => {
  const CourierService = await CourierService.findById(req.params.id);
  if (!CourierService) {
    return sendResponse(res, 404, 'Paquete no encontrado');
  }
  sendResponse(res, 200, 'Detalle del paquete', CourierService);
});

// Controlador para actualizar un paquete por ID
export const updateCourierServiceById = tryCatch(async (req, res) => {
  const { status } = req.body;

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
export const deleteCourierService = tryCatch(async (req, res) => {
  const deletedCourierService = await CourierService.findByIdAndDelete(req.params.id);
  if (!deletedCourierService) {
    return sendResponse(res, 404, 'Paquete no encontrado');
  }
  sendResponse(res, 204, 'Paquete eliminado con éxito');
});
