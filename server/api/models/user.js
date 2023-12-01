import mongoose from 'mongoose';

const userSchema = new mongoose.Scheme({
    type: {
        type: String,
        enum: ['admin', 'safety_guard', 'home_owner'],
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    documentId: {
        type: String
    },
    photoUrl: {
        type: String
    },
    address: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    }
});

const User = mongoose.model('User', userSchema);

export default User;