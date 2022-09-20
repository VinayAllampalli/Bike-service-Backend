const battery = require('../models/battery')

exports.Battery = async(req,res)=>{
    console.log("Battery Api Triggered")
    try{
        batteries = await battery.findOne({BatteryName:req.body.BatteryName})
        console.log("----->",batteries)
        if (batteries){
            return res.status(400).json({message:'batteries name already exists'})
        }
        else{ 
            result = new battery(req.body);
                        if(result){
                            console.log("--------->",result)
                            result.save()
                            res.status(200).json({success:true,"message":" Saved sucessfully"})
                        }
                        else{
                            res.status(400).json({"message":"something went wrong"});
                        }
                    }
            
    }
    catch(err){
        res.status(400).send(err);
        console.log(err)

    }
}

    exports.GetBattery = async (req,res)=>{
        console.log("get Battery api triggred")
        try{
            let data = await battery.find({},{BatteryName:1,_id:0})
            if(data){
                res.status(200).json({success:true,data})
            }
            else{
                res.status(400).json({success:false,message:"Something went Wrong"})
            }
        }
        catch(err){
            res.status(400).send(err);
            console.log(err)
        }
}