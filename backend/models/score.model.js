const mongoose = require('mongoose');
const {Schema} = require('mongoose');


const ScoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },

    tenor: {
        type: [Schema.Types.ObjectId],
        required: false,
        default: null},

    double_tenor: {
        type: [Schema.Types.ObjectId],
        required: false,
        default: null},


        double_seconds: {
            type: [Schema.Types.ObjectId],
            required: false,
            default: null},


        guitar: {
            type: [Schema.Types.ObjectId],
            required: false,
            default: null},


        cello: {
            type: [Schema.Types.ObjectId],
            required: false,
            default: null},


        tenor_bass: {
            type: [Schema.Types.ObjectId],
            required: false,
            default: null},

        six_bass: {
            type: [Schema.Types.ObjectId],
            required: false,
            default: null},


        engine: {
            type: [Schema.Types.ObjectId],
            required: false,
            default: null},


        full_band: {
            type: Schema.Types.ObjectId,
            required: false,
            default: null},


    },

{
    timestamps: true

})


const Score = mongoose.model("Score", ScoreSchema);

module.exports = Score