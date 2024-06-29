const mongoose = require("mongoose")
const enums = require("../shared/enums.js")

const ScoreSchema = mongoose.Schema(
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
            type: String,
            required: false,
            default: "Unknown"
        },


    },
    {
        timestamps: true
    }
);

const Score = mongoose.model("Score", ScoreSchema);

module.exports = Score;