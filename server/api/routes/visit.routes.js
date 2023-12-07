import express from 'express';
import { registerVisit, getAllVisits, getVisitById, updateVisit, deleteVisit  } from '../controllers/visit.controller.js';

const router = express.Router();

router
    .get('/', getAllVisits)
    .get('/:id', getAllVisits)
    .post('/', registerVisit)
    .patch('/:id', updateVisit)
    .delete('/:id', deleteVisit)

export default router;