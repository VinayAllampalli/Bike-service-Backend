const user = require('../models/register')

exports.userData = async(req,res) =>{
    console.log("....Hii>>>>>>>>>")
try{
    const emp =  await user.findOne({ username: req.body.username });
    if(emp){
        res.send({message: "username is already exist"})
}
else{
    const data = new user(req.body);
    const result = await data.save();
    res.status(200).json({ success: true, result: result });
}

}
catch(err){
    console.log(err);
    res.status(500).json({ sucess: false });
}}

exports.getUsers = async(req,res)=>{
    try{
        let data = await user.find()
        res.status(200).json({sucess:true,result:data})
        
    } catch(err){
        console.log(err);
        res.status(500).json({ sucess: false });
    }
   

}
