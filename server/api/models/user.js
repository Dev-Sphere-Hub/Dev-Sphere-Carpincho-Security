import mongoose from 'mongoose';

const userSchema = new mongoose.Scheme({
    type: {
        type: String,
        enum: ['admin', 'safety_guard', 'home_owner', 'visitor'],
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    phone: {
        type: String
    },
    documentId: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String
    },
    address: {
        type: String
    },
    is_authorized: {
        type: Boolean,
        default: true
    }
});

const User = mongoose.model('User', userSchema);

export default User;