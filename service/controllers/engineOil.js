const Oil = require('../models/engineOil')

exports.engineOil = async(req,res)=>{
    console.log("Engine Oil Api Triggered")
    try{
        oil = await Oil.findOne({EngineOilName:req.body.EngineOilName})
        console.log("----->",oil)
        if (oil){
            return res.status(400).json({message:'Engine Oil name already exists'})
        }
        else{ 
            result = new Oil(req.body);
                        if(result){
                            console.log("--------->",result)
                            result.save()
                            res.status(200).json({success:true,"message":" Saved sucessfully saved"})
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

exports.GetEngineoil = async (req,res)=>{
    console.log("get Oil api triggred")
    try{
        let data = await Oil.find({},{EngineOilName:1,_id:0})
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
