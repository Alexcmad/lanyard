const mongoose = require("mongoose")
const {Schema} = require("mongoose");


const SongSchema = new Schema(
    {

        title: {
            type: String,
            required: [true, "Title is required"],
            unique: true
        },

        ratings:[{
            user: {
                type: Schema.Types.ObjectId,
                ref: "User",
                required:true
            },
            rating: {
                type: Number,
                required: false,
                min: 1, //newbie
                max: 5, //senior
                default: 0,
            },
            comment:{
                type: String,
                required: false
            },
            section: {
                type:Number,
                required: false,
                min: 0,
                max: 6,
                default: null
            }
        }],

        progress:[{
            user: {
                type: Schema.Types.ObjectId,
                ref: "User",
                required:true
            },
            completion: {
                type: Number,
                required: false,
                min: 1,
                max: 4,
                default: 0,
            },
            section: {
                type:Number,
                required: false,
                min: 0,
                max: 6,
                default: null
            }
        }],

        arranger: {
            type: [String],
            required: false,
            default: ["Unknown"]
        },

        scores: {type: Schema.Types.ObjectId,
            ref: 'Score',
        required: false,
        default: null},

        audio_files: {type: Schema.Types.ObjectId,
            ref: 'Audio',
        required: false,
            default: null},

        createdAt: {
            type: Date,
            default: Date.now
        }

    }
);

const Song = mongoose.model("Song", SongSchema);

module.exports = Song;