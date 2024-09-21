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
// Rate a song
async function rateSong (req, res) {
    const songId = req.params.id;
    console.log(songId);
    const { rating, comment, section } = req.body;

    if (rating < 1 || rating > 5) {
        return res.status(400).json({ error: 'Rating must be between 1 and 5.' });
    }

    try {
        const song = await Song.findById(songId);
        if (!song) {
            return res.status(404).json({ error: 'Song not found.' });
        }

        // Check if user has already rated the song
        const existingRating = song.ratings.find(r => r.user.toString() === req.user._id);
        if (existingRating) {
            existingRating.rating = rating;
            existingRating.section = section;
            existingRating.comment = comment;
        } else {
            song.ratings.push({ user: req.user._id, rating, section, comment });
        }

        await song.save();
        res.json({ message: 'Rating added/updated successfully.', song });
    } catch (error) {
        res.status(500).json({ error: 'Error rating the song.' });
    }
};




module.exports= {
    add_song,
    delete_song_by_id,
    update_song_by_id,
    get_all_songs,
    get_song_by_id,
    rateSong


}