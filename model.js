const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    rollno : {
        type: String,
        required: true,
        unique: true
    },
    college: {
        type: String,
        required: true,
        unique: false
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;