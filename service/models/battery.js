const mongoose = require('mongoose')
const battery = new mongoose.Schema({
    BatteryName:{
        type:String
    },
    Price:{
        type:Number
    }

});
const Battery = mongoose.model('Battery',battery)
module.exports=Battery;