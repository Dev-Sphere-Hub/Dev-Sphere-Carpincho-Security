import mongoose from 'mongoose';

const newSchema = new mongoose.Scheme({
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
        type: Date,
        default: Date.now
    }
});

const New = mongoose.model('New', newSchema);

export default New;