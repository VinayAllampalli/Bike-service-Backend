var Bike = require('../models/bikename');

exports.bikeTypes=async (req,res)=>{
    console.log("add bikes APi is triggred")
    console.log(req.body)
    try{
        bike = await Bike.findOne({bikeName:req.body.bikeName})
        console.log("----->",bike)
        if (bike){
            return res.status(400).json({message:'bike already exists'})
        }
        else{ 
            result = new Bike(req.body);
                        if(result){
                            console.log("--------->",result)
                            result.save()
                            res.status(200).json({success:true,"message":" User details sucessfully saved"})
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

exports.GetBikeData = async (req,res)=>{
    console.log("get bike api triggred")
    try{
        let data = await Bike.find()
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
