const Song = require("../models/song.model");

async function add_song (req, res) {
    try {
        const song = await Song.create(req.body);
        res.status(200).json(song);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function delete_song_by_id (req, res) {
    try {
        const {id} = req.params;
        const song = await Song.findByIdAndDelete(id)
        if (!song) {
            return res.status(404).json({message: "Song not found"})
        }
        res.status(202).json({Score: song, message: "Deleted Successfully"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

async function update_song_by_id (req, res) {
    try {
        const {id} = req.params;
        const song = await Song.findByIdAndUpdate(id, req.body);
        if (!song) {
            return res.status(404).json({message: "Song not found"})
        }

        const updatedScore = await Song.findById(id);
        res.status(200).json(updatedScore)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function get_all_songs(req, res) {
    try {
        const songs = await Song.find();
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function get_song_by_id (req, res) {
    try {
        const {id} = req.params;
        const song = await Song.findById(id)
        if (!song) {
            return res.status(404).json({message: "Song not found"})
        }
        res.status(200).json(song)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}



module.exports= {
    add_song,
    delete_song_by_id,
    update_song_by_id,
    get_all_songs,
    get_song_by_id


}