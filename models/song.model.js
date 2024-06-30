const mongoose = require("mongoose")
const enums = require("../shared/enums.js")
const {Schema} = require("mongoose");


const SongSchema = mongoose.Schema(
    {

        name: {
            type: String,
            required: [true, "Name is required"]
        },

        rating: {
            type: String,
            required: false,
            default: enums.Rating.UNRATED
        },

        arranger: {
            type: [String],
            required: false,
            default: ["Unknown"]
        },

        scores: {type: Schema.Types.ObjectId,
        required: false,
        default: null},

        audio_files: {type: Schema.Types.ObjectId,
        required: false,
            default: null}

    },
    {
        timestamps: true
    }
);

const Song = mongoose.model("Score", SongSchema);

module.exports = Song;