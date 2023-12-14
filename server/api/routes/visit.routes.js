import express from 'express';
import { registerVisit, getAllVisits, getVisitById, updateVisit, deleteVisit } from '../controllers/visit.controller.js';
import { checkAuthentication } from '../middleware/auth.middleware.js';

const router = express.Router();

router
    .get('/', checkAuthentication, getAllVisits)
    .get('/:id', checkAuthentication, getVisitById)
    .post('/', checkAuthentication, registerVisit)
    .patch('/:id', checkAuthentication, updateVisit)
    .delete('/:id', checkAuthentication, deleteVisit)

export default router;