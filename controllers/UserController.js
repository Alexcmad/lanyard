const User = require('../models/user.model');

async function add_user(req, res) {
    try {
        const user = await User.create(req.body);
        return res.status(201).send(user);
    } catch (error){
        res.status(500).json({message: error.message});

    }
}

module.exports = {
    add_user,
}