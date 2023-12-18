import mongoose from 'mongoose';

const visitSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    checkIn: {
        type: Date,
        default: Date.now
    },
    checkOut: {
        type: Date
    },
    visitorIdentityNumber: {
        type: String,
        required: true
    },
    visitorFullName: {
        type: String,
        required: true
    },
    homeOwnerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    vehicle: {
        type: mongoose.Types.ObjectId,
        ref: 'Vehicle',
    },
    checkInBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    checkOutBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    state: {
        type: String,
        enum: ['authorized', 'unauthorized'],
        required: true
    },
    photo: {
        type: String
    },
    visitType: {
        type: String,
        enum: ['vehicle', 'walking', 'courierService'],
        required: true
    },
    note: {
        type: String
    }
}, { timestamps: true });

const Visit = mongoose.model('Visit', visitSchema);

export default Visit;