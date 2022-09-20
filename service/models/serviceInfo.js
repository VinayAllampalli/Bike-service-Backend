const mongoose = require('mongoose')
const service = new mongoose.Schema({
    ServiceName:{
        type:String
    },
    Description:{
        type:String
    },
    Price:{
        type:Number
    }

});
const ServiceTypes = mongoose.model('Service',service)
module.exports=ServiceTypes;