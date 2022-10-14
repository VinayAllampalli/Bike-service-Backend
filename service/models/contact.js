const mongoose = require('mongoose')
const contact = new mongoose.Schema({
    Name:{
        type:String
    },
    email:{
        type:String
    },
    Feedback:{
        type:String
    },
    userId:{
        type:String
    }
    

});
const ContactUs = mongoose.model('Contact',contact)
module.exports=ContactUs;