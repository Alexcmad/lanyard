const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const UserSchema = mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    display_name: {type: String, required: false, default: "User"},
    email: {type: String, required: true},
    password: {type: String, required: true},
    superuser: {type: Boolean, default: false}
})

const User = mongoose.model("User", UserSchema);

module.exports = User;