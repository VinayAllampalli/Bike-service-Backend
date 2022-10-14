const contact = require("../models/contact")

exports.ContactUs = async(req,res)=>{
    console.log("Contact Us Api is triggred")
    try{
        console.log(req.body)
        const data = new contact(req.body)
        console.log("--------->",data)
        await data.save();
        res.status(200).json({"message":"success"})
    }
    catch(err){
        console.log(err)
        res.status(400).send(err);

    }
}