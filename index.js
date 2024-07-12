const {response} = require("express");
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const USER = process.env.MONGO_USER;
const PASSWORD = process.env.MONGO_PASSWORD;

const songRoute = require('./routes/song.route');
const userRoute = require('./routes/user.route');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use("/api/songs", songRoute)
app.use("/api/users", userRoute)


app.get('/', (req, res) => {
    res.send("Ping")
})

mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@c1.tx89nds.mongodb.net/Node-API?retryWrites=true&w=majority&appName=c1`)
    .then(() => {
        console.log("Database Connected")
    })
    .catch(() => {
        console.log("Connection Failed")
    })

app.listen(3000, () => {
    console.log('Server running on port 3000');
})