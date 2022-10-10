const mongoose = require('mongoose')
const bike = new mongoose.Schema({
    bikeName:{
        type:String
    },
    

});
const Bikes = mongoose.model('Bikes',bike)
module.exports=Bikes;