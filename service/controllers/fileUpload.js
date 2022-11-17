var User = require('../models/register');
exports.fileUpload = async (req,res)=>{
    console.log("file Upload Api is triggerd")
    try{
        console.log("----->",req.params.userId)
        const filename = req.file.filename;
        const basepath = `${req.protocol}://${req.get('host')}/public/uploads/`;
        const data = {
            file: `${basepath}${filename}`,
        }
        let result = await User.findOneAndUpdate({ userId: req.params.userId }, { $set: data })
        if (result == null) {
            res.status(400).json({ success: false, message: "Profile is not exists" })
        }
        // else if(err){
        //     console.log(err)
        // }
        else {
            res.status(200).json({ success: true, message: "Updated successfully",data })
        }
    }
    
    catch(err){
        console.log(err)
        res.status(400).json({ success: false })
    }
}
