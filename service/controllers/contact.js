const contact = require("../models/contact")
const uuid = require('uuid')

exports.ContactUs = async(req,res)=>{
    console.log("Contact Us Api is triggred")
    try{
        const UUID = uuid.v4()
        console.log(req.body)
        
        const data = new contact({name:req.body.Name,
    email:req.body.email,
    Feedback:req.body.Feedback,
    userId:req.body.userId,
    UUID


    })
        console.log("--------->",data)
        await data.save();
        res.status(200).json({"message":"success"})
    }
    catch(err){
        console.log(err)
        res.status(400).send(err);

    }
}