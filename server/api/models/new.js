import mongoose from 'mongoose';

const newSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: ['emergencies', 'featured_events', 'unauthorized_person', 'unauthorized_vehicle']
    },
    detail: {
        type: String,
        required: true
    },
    date: {
        type: Date
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const New = mongoose.model('New', newSchema);

export default New;