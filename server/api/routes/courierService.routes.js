import express from 'express';
import { createCourierService, deleteCourierService, getAllCourierServices, getCourierServiceById, updateCourierServiceById } from '../controllers/courierService.controller.js'
import { checkAuthentication } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', checkAuthentication, getAllCourierServices);
router.get('/:id', checkAuthentication, getCourierServiceById);
router.post('/', checkAuthentication, createCourierService);
router.put('/:id', checkAuthentication, updateCourierServiceById);
router.delete('/:id', checkAuthentication, deleteCourierService);

export default router;