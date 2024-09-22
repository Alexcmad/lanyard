const {response} = require("express");
const express = require('express');
const mongoose = require('mongoose');
const app = express();


const USER = process.env.MONGO_USER;
const PASSWORD = process.env.MONGO_PASSWORD;

const userRoute = require('./routes/user.route');
const fileRoutes = require('./routes/file.route');
const songRoutes = require('./routes/song.route');
const progressRoute = require('./routes/userProgress.route')
const authRoute = require('./routes/auth.route');


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use("/api/users", userRoute)
app.use('/api/files', fileRoutes);
app.use('/api/songs', songRoutes)
app.use('/api/progress', progressRoute)
app.use('/api/auth', authRoute)



app.get('/', (req, res) => {
    res.send("Ping")
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Database Connected")
    })
    .catch(() => {
        console.log("Connection Failed")
    })

app.listen(3000, () => {
    console.log('Server running on port 3000');
})
