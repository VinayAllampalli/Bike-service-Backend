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
    },
    EngineOil:[{
         EngineOilName:{
            type:String
         },
         EngineOilPrice:{
            type:Number
         },
         TankCapacity:{
            type:String
         }
    }],
    Battery:[{
        BatteryName:{
        type:String
        },
        BatteryPrice:{
        type:String
        }

    }]   
    

});
const ServiceTypes = mongoose.model('Service',service)
module.exports=ServiceTypes;