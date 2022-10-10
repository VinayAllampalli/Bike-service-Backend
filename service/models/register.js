const mongoose = require('mongoose')
const user = new mongoose.Schema({
    username:{
        type:String,
        
    },
    email:{
        type:String,
        
    },
    password:{
        type:String,
        
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    userId:{
        type:String
    }

});
const Users = mongoose.model('User',user)
module.exports=Users;