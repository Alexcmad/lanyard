const mongoose = require('mongoose');
const Schema = mongoose.Schema

const FileMetaDataSchema = new Schema({
    filename:{
        type:String,
        required:true
    },
    contentType:{
        type:String,required:true
    },
    fileId:{
        type:Schema.Types.ObjectId,
        required:true
    },
    songID:{
        type:Schema.Types.ObjectId,
        ref: 'Song',
        required:false
    },
    uploadedBy:{
        type:Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    uploadDate:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('FileMetaData', FileMetaDataSchema);