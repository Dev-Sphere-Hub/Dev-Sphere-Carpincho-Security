import express from 'express';
import { registerVisit } from '../controllers/visit.controller.js';

const router = express.Router();

router
    .post('/', registerVisit);

export default router;