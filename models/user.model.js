const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    superuser: {type: Boolean, default: false}
})

const User = mongoose.model("User", UserSchema);

module.exports = User;