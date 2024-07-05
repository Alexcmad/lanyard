const express = require('express');
const router = express.Router();
const controller = require('../controllers/song.controller');

const Score = require("../models/song.model");


router.post('/api/songs', async (req, res) => {
        await controller.add_song(req,res)
})

router.get('/api/songs', async (req, res) => {
    await controller.get_all_songs(req,res)
})

router.get('/api/songs/:id', async (req, res) => {
    await controller.get_song_by_id(req,res)
})

router.put('/api/songs/:id', async (req, res) => {
    await controller.update_song_by_id(req,res)
})

router.delete('/api/songs/:id', async (req, res) => {
    await controller.delete_song_by_id(req,res)
})