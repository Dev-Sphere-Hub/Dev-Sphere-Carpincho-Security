import express from 'express';
import { createVehicle, getAllVehicles, getVehicleById } from '../controllers/vehicle.controller.js';
import { checkAuthentication } from '../middleware/auth.middleware.js';
import { validationMiddleware, registerVehicleSchemaValidation } from '../middleware/validation.middleware.js'
import uploadImage from '../utils/images.js';
const router = express.Router();

router.get('/:id', checkAuthentication, getVehicleById);
router.post('/', checkAuthentication, validationMiddleware(registerVehicleSchemaValidation), createVehicle);
router.get('/', getAllVehicles);
router.post('/upload', async(req, res) => {
    if (!req.files) return res.send('Please upload an image');

    const { image } = req.files;
    const fileTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!fileTypes.includes(image.mimetype)) return res.send('Image formats supported: JPG, PNG, JPEG');
    const images = await uploadImage(image.tempFilePath);

    res.status(201).json({
        message: 'Image uploaded successfully',
        imageUrl: images.secure_url
    })
})

export default router;