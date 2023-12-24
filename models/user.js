// models/user.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true,
        unique: true,
    },

  username: { 
    type: String, 
    required: true, 
    unique: true },

  email: { 
    type: String, 
    required: true, 
    unique: true },

  photo: { 
    //foto dosya dizini için string tuttum
    type: String, 
    },

  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
