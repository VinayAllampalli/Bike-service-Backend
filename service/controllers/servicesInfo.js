const { json } = require('body-parser')
const Service = require('../models/serviceInfo')

exports.ServiceType = async(req,res)=>{
    console.log("Service Api Triggered")
    try{
        service = await Service.findOne({ServiceName:req.body.ServiceName})
        console.log("----->",service)
        if (service){
            return res.status(400).json({message:'Engine Oil name already exists'})
        }
        else{ 
            result = new Service(req.body);
                        if(result){
                            console.log("--------->",result)
                            result.save()
                            res.status(200).json({success:true,"message":" Sucessfully saved"})
                        }
                        else{
                            res.status(400).json({success:false,"message":"something went wrong"});
                        }
                    }
            
    }
    catch(err){
        res.status(400).send(err);
        console.log(err)

    }
}

exports.GetServices = async (req,res)=>{
    console.log("get Service api triggred")
    try{
        let data = await Service.find({},{_id:0})
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

exports.ServicePrice = async(req,res)=>{
    console.log("Service Price api is triggred")
    let client = req.query
    // console.log("------>",client)
    // console.log("------>",typeof(client.list))
    // let x = JSON.parse(client.list.list)
    // console.log("---->",x)

    try{

let data = await Service.find({ServiceName:req.body},{_id:0})
        if(data){
            res.status(200).json({success:true,data})
        }
        else{
            res.status(400).json({success:false,message:"Something went Wrong"})
        }
    }
    
    catch(err){

    }
}
