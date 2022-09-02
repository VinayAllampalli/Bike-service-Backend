const mongoose = require('mongoose')
const user = new mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    userName:{
        type:String
    }

})
const Users = mongoose.model('User',user)
module.exports=Users;