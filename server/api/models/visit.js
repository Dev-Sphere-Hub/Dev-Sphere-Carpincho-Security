import mongoose from 'mongoose';

const visitSchema = new mongoose.Scheme({
    apartment: {
        type: String,
        required: true
    },
    interior: {
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
        type: String,
        ref: 'User'
    },
    vehicle: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    status: {
        type: Boolean,
        default: true
    }
});

const Visit = mongoose.model('Visit', userSchema);

export default Visit;