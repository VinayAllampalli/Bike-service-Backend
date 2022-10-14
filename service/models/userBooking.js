const mongoose = require('mongoose')
const userBookingData = new mongoose.Schema({
    userDetails:{
        type:Object
    },
    serviceList:{
        type:Object
    },

    Amount:{
        type:Number
    },
    Battery:{
       type:String 
    },
    EngineOil:{
       type:String 
    },
    userID:{
        type:String
    }
});
const BookingData = mongoose.model('UserBookingData',userBookingData)
module.exports=BookingData;