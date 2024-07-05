const Score = require("../models/song.model");

async function add_song (req, res) {
    try {
        const score = await Score.create(req.body);
        res.status(200).json(score);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function delete_song_by_id (req, res) {
    try {
        const {id} = req.params;
        const score = await Score.findByIdAndDelete(id)
        if (!score) {
            return res.status(404).json({message: "Score not found"})
        }
        res.status(202).json({Score: score, message: "Deleted Successfully"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

async function update_song_by_id (req, res) {
    try {
        const {id} = req.params;
        const score = await Score.findByIdAndUpdate(id, req.body);
        if (!score) {
            return res.status(404).json({message: "Score not found"})
        }

        const updatedScore = await Score.findById(id);
        res.status(200).json(updatedScore)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function get_all_songs(req, res) {
    try {
        const scores = await Score.find();
        res.status(200).json(scores);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function get_song_by_id (req, res) {
    try {
        const {id} = req.params;
        const score = await Score.findById(id)
        if (!score) {
            return res.status(404).json({message: "Score not found"})
        }
        res.status(200).json(score)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}



export {
    add_song,
    delete_song_by_id,
    update_song_by_id,
    get_all_songs,
    get_song_by_id


}