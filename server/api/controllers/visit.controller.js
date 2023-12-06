import Visit from '../models/visit.js';
import { tryCatch } from '../utils/tryCatch.js';
import { sendResponse } from '../utils/responses.js';

// Controlador para crear una nueva visita

// the same before but using tryCatch
export const registerVisit = tryCatch(async (req, res) => {
    const { address, visitorIdentityNumber, visitorFullName, homeOwnerId, state } = req.body;
    if (!address || !visitorIdentityNumber || !visitorFullName || !homeOwnerId || !state) {
        return sendResponse(res, 400, 'Faltan datos obligatorios');
    }
    const visit = new Visit(req.body);
    
    await visit.save();
    sendResponse(res, 200, 'Visita registrado con éxito');
});

// Controlador para actualizar una visita por ID
export const updateVisit = tryCatch(async (req, res) => {
    const updatedVisit = await Visit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedVisit) {
      return sendResponse(res, 404, 'Visita no encontrada');
    }
    sendResponse(res, 200, 'Visita actualizada con éxito', updatedVisit);
});


// Controlador para obtener todas las visitas
export const getAllVisits = tryCatch(async (req, res) => {
      const visits = await Visit.find();
      sendResponse(res, 200, 'Visitas encontradas con éxito', visits);
  });
  
  // Controlador para obtener una visita por ID
export const getVisitById = tryCatch(async (req, res) => {
    const visit = await Visit.findById(req.params.id);
    if (!visit) {
      return sendResponse(res, 404, 'Visita no encontrada');
    }
    sendResponse(res, 200, 'Visita encontrada con éxito', visit);
});

// Controlador para eliminar una visita por ID
export const deleteVisit = tryCatch(async (req, res) => {
      const visit = await Visit.findByIdAndDelete(req.params.id);
      if (!visit) {
        return res.status(404).json({ error: 'Visita no encontrada' });
      }
      sendResponse(res, 204);
  });