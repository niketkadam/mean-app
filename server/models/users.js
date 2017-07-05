
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loginSchema = new Schema({
    username: String,
    password: String,
    email: String,
});
module.exports = mongoose.model('users', loginSchema);