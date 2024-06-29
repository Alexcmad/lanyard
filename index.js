const {response} = require("express");
const express = require('express');
const mongoose = require('mongoose');
const Score = require('./models/score.model.js');
const app = express();

app.use(express.json());

app.post('/api/scores', async (req, res) => {
    try {
        const score = await Score.create(req.body);
        res.status(200).json(score);
    } catch (error) {
        console.log(500).json({message: error.message});
    }
})

app.get('/', (req, res) => {
    res.send("HEEEEEYYYY")
})

mongoose.connect("mongodb+srv://alex:*c$kg7L7KKQ-zzq@c1.tx89nds.mongodb.net/Node-API?retryWrites=true&w=majority&appName=c1")
    .then(() => {
        console.log("Database Connected")
    })
    .catch(() => {
        console.log("Connection Failed")
    })

app.listen(3000, () => {
    console.log('Server running on port 3000');
})