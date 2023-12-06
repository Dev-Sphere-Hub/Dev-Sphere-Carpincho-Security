import express from 'express';
import visitsRoutes from './visit.routes.js';

const router = express.Router();

// router.use('/api/v1/users');
// router.use('/api/v1/packages');
// router.use('/api/v1/vehicles');
router.use('/api/v1/visits', visitsRoutes)
// router.use('/api/v1/news');

export default router;