const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    userid: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pwd:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('users', userSchema);