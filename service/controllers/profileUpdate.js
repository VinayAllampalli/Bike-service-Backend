var User = require('../models/register');
const Password = require('../utils/password');
 exports.UpdateUserProfile = async (req,res)=>{
    console.log("Update User profile is triggred")
    try{
     const data = {
        username: req.body.username,
        password: Password.passwordHash(req.body.password)
     }
     console.log("----->",req.body)
     console.log("--->",req.params.userId)
     let result = await User.findOneAndUpdate({ userId: req.params.userId }, { $set: data })
     console.log(result)
     if(result==null){
        res.status(400).json({ success: false, message: "Profile is not exists" })
     }
    //  else if(err){
    //     console.log(err)
    //  }
     else{
        res.status(200).json({ success: true, message: "Updated successfully",data})
     }
    }
    catch(err){
        console.log(err)
        res.status(400).json({ success: false })
    }
 }