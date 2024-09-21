const User = require('../models/user.model');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

async function register(req, res) {
    const { name, email, password, } = req.body;
    try {
        let user = await User.findOne({ email: email });
        if (user) {
            return res.status(400).json({message:"User already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({
            email: email,
            password: hashedPassword,
            name: name
        })

        await user.save();

        const token = jwt.sign({_id: user._id, superuser: user.superuser}, process.env.JWT_SECRET, {expiresIn:'1h'})
        res.json({token})
    } catch (err){
        res.status(500).json({err:"Server error"});
    }
}

async function login(req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({error:"Invalid email or password"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({error:"Invalid email or password"});
        }

        const token = jwt.sign({_id: user._id, superuser: user.superuser}, process.env.JWT_SECRET, {expiresIn:'1h'})
        res.json({token})

    }catch (err){
        res.status(500).json({err:"Server error"});
    }
}

module.exports = {
    login,
    register
}