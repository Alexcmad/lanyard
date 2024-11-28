const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String
    },
    status: {
        type: String,
        enum: ['draft', 'posted'],
        default: 'draft'
    },
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'  // Link to the User model
    }],
    notificationPreference: {
        type: String,
        enum: ['email', 'in-app', 'both'],
        default: 'both'
    }
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
