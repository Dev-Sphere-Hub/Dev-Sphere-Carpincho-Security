import express from 'express';
import { createUser, login } from '../controllers/auth.controller.js';
import { validationMiddleware, registerUserSchemaValidation, loginSchemaValidation } from '../middleware/validation.middleware.js'

const router = express.Router();

router.post('/register', validationMiddleware(registerUserSchemaValidation), createUser);
router.post('/login', validationMiddleware(loginSchemaValidation), login);

export default router;