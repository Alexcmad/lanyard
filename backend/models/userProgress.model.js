const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User Progress schema
const UserProgressSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    song: {
        type: Schema.Types.ObjectId,
        ref: 'Song',
        required: true,
    },
    hoursSpent: {
        type: Number, // Track how many hours the user spent practicing the song
        default: 0,
    },
    progressPercentage: {
        type: Number, // Track the progress as a percentage (0% to 100%)
        min: 0,
        max: 100,
        default: 0,
    },
    lastUpdated: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('UserProgress', UserProgressSchema);
