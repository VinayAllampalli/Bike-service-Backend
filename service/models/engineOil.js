const mongoose = require('mongoose')
const oil = new mongoose.Schema({
    EngineOilName:{
        type:String
    },
    TankCapacity:{
        type:String
    },
    Price:{
        type:Number
    }

});
const Oil = mongoose.model('Oil',oil)
module.exports=Oil;