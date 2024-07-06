const {response} = require("express");
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const songRoute = require('./routes/song.route');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use("/api/songs", songRoute)


app.get('/', (req, res) => {
    res.send("Ping")
})

mongoose.connect("mongodb://127.0.0.1:27017/lanyard")
    .then(() => {
        console.log("Database Connected")
    })
    .catch(() => {
        console.log("Connection Failed")
    })

app.listen(3000, () => {
    console.log('Server running on port 3000');
})