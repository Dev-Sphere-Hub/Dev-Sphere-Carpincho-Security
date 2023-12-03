import express from 'express';

const router = express.Router();

router.use('/api/v1/users');
router.use('/api/v1/packages');
router.use('/api/v1/vehicles');
router.use('/api/v1/visits');
router.use('/api/v1/news');

export default router;