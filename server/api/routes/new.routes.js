import express from 'express';
import { registerNew, getAllNews, getNewById, updateNew, deleteNew } from '../controllers/new.controller.js';
import { checkAuthentication } from '../middleware/auth.middleware.js';
import { validationMiddleware, registerNewSchemaValidation } from '../middleware/validation.middleware.js'
const router = express.Router();

router
    .get('/', getAllNews)
    .get('/:id', checkAuthentication, getNewById)
    .post('/', checkAuthentication, validationMiddleware(registerNewSchemaValidation), registerNew)
    .patch('/:id', checkAuthentication, updateNew)
    .delete('/:id', checkAuthentication, deleteNew)

export default router;