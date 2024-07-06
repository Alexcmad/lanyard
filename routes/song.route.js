const express = require('express');
const router = express.Router();
const controller = require('../controllers/SongController');

router.post('/', async (req, res) => {
        await controller.add_song(req,res)
})

router.get('/', async (req, res) => {
    await controller.get_all_songs(req,res)
})

router.get('/:id', async (req, res) => {
    await controller.get_song_by_id(req,res)
})

router.put('/:id', async (req, res) => {
    await controller.update_song_by_id(req,res)
})

router.delete('/:id', async (req, res) => {
    await controller.delete_song_by_id(req,res)
})

module.exports = router