import express from 'express';
import { createUser, login, recoverPassword, resetPassword } from '../controllers/auth.controller.js';
import { validationMiddleware, registerUserSchemaValidation, loginSchemaValidation, recoverPasswordSchemaValidation, resetPasswordSchemaValidation } from '../middleware/validation.middleware.js'

const router = express.Router();

router.post('/register', validationMiddleware(registerUserSchemaValidation), createUser);
router.post('/login', validationMiddleware(loginSchemaValidation), login);
router.post('/recover-password', validationMiddleware(recoverPasswordSchemaValidation), recoverPassword);
router.post('/reset-password/:id', validationMiddleware(resetPasswordSchemaValidation), resetPassword);

export default router;