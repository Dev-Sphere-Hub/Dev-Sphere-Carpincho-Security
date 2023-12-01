import mongoose from 'mongoose';

const packageSchema = new mongoose.Scheme({
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
    }
});

const Package = mongoose.model('Package', packageSchema);

export default Package;