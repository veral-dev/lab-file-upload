const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  path: String,
  pictureName: String
});

module.exports = model('User', UserSchema);