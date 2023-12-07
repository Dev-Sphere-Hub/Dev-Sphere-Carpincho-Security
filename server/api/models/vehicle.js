import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
    plateCode: {
        type: String,
        required: true
    },
    car_insurance: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    photo: {
        type: String
    }
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

export default Vehicle;