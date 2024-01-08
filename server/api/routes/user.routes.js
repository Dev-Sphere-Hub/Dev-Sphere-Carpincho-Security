import express from 'express';
import { getHomeOwners, profile, updateUser } from '../controllers/user.controller.js'
import { checkAuthentication } from '../middleware/auth.middleware.js';
import { validationMiddleware, updateUserSchemaValidation } from '../middleware/validation.middleware.js'

const router = express.Router();

router.get('/profile', checkAuthentication, profile);
router.patch('/:id', checkAuthentication, validationMiddleware(updateUserSchemaValidation), updateUser);
router.get('/home-owners', checkAuthentication, getHomeOwners)
export default router;