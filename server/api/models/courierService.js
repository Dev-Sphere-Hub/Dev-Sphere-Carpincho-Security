import mongoose from 'mongoose';

const courierServiceSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    recipient: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    deliverer: {
        type: String,
        required: true
    },
    photoURL: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    recordedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        default: 'received',
        enum: ['received', 'delivered']
    }
}, { timestamps: true });

const CourierService = mongoose.model('CourierService', courierServiceSchema);

export default CourierService;