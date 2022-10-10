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
    Orderid:{
        type:Number  
    }

});
const BookingData = mongoose.model('UserBookingData',userBookingData)
module.exports=BookingData;