const mongoose = require('mongoose');
const Grid = require('gridfs-stream');

// Create a Mongoose connection
mongoose.connect(`mongodb+srv://alex:*c$kg7L7KKQ-zzq@c1.tx89nds.mongodb.net/Node-API?retryWrites=true&w=majority&appName=c1`, {

});

const conn = mongoose.connection;
let gfs;

conn.once('open', () => {
    // Initialize GridFS
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');  // You can name this anything you like
    console.log('GridFS initialized and connected to the uploads collection.');
});

module.exports = { mongoose, gfs };
