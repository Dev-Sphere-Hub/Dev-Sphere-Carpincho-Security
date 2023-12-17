import express from 'express';
import { createUser, login } from '../controllers/auth.controller.js';
import { validationMiddleware, registerUserSchemaValidation } from '../middleware/validation.middleware.js'

const router = express.Router();

router.post('/register', validationMiddleware(registerUserSchemaValidation), createUser);
router.post('/login', login);

export default router;