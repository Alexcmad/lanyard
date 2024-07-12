const User = require('../models/user.model');
const {get_all_songs} = require("./SongController");

async function add_user(req, res) {
    try {
        const user = await User.create(req.body);
        return res.status(201).send(user);
    } catch (error){
        res.status(500).json({message: error.message});

    }
}

async function get_all_users(req, res) {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    add_user,
    get_all_songs,
}