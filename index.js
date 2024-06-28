const {response} = require("express");
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb+srv://alex:*c$kg7L7KKQ-zzq@c1.tx89nds.mongodb.net/Node-API?retryWrites=true&w=majority&appName=c1")
    .then(()=>{
        console.log("Database Connected")
    })
    .catch(()=>{
        console.log("Connection Failed")
    })

app.listen(3000, () => {
    console.log('Server running on port 3000');
})

app.get('/', (req, res) => {
    res.send("HEEEEEYYYY")
})

