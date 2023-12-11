import express from 'express';
import { profile, updateUser } from '../controllers/user.controller.js'
import { checkAuthentication } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/profile', checkAuthentication, profile);
router.patch('/:id', checkAuthentication, updateUser);
export default router;