import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Scheme({
    type: {
        type: String,
        required: true
    },
    plateCode: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    license: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    color: {
        type: String,
    },
    details: {
        type: String,
        required: true
    }
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

export default Vehicle;