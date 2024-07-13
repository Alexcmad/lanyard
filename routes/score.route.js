const express = require('express');
const router = express.Router();
const controller = require('../controllers/ScoreController');
const db = require('../shared/database');

router.post('/', db.upload.fields([
    { name: 'tenor', maxCount: 5 },
    { name: 'double_tenor', maxCount: 5 },
    { name: 'double_seconds', maxCount: 5 },
    { name: 'guitar', maxCount: 5 },
    { name: 'cello', maxCount: 5 },
    { name: 'tenor_bass', maxCount: 5 },
    { name: 'six_bass', maxCount: 5 },
    { name: 'engine', maxCount: 10 },
    { name: 'full_band', maxCount: 5 }
]), async (req, res) => {
    await controller.add_score(req,res)
})

router.get('/', async (req, res) => {
    await controller.get_all_scores(req,res)
})

router.get('/:id', async (req, res) => {
    await controller.get_score_by_id(req,res)
})

router.put('/:id', async (req, res) => {
    await controller.update_score_by_id(req,res)
})

router.delete('/:id', async (req, res) => {
    await controller.delete_score_by_id(req,res)
})

module.exports = router