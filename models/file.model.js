const Schema = require ("mongoose")
const mongoose = require("mongoose");


const fileSchema = new mongoose.Schema({
    name: {type:String, required: [true, 'File name is required']},
    ref: {type:String, required: [true, 'File reference is required']}
},
    {
        timestamps: true
    })

const File = mongoose.model("File", fileSchema);

module.exports=File