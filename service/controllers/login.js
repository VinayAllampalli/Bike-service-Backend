const register = require('../models/register');
const password = require('../utils/password');
const jwt = require('../utils/jwt');

exports.login = async (req, res) => {
    console.log("login api is triggred")
    try {
        // console.log("----------------",req.body);
        if (!req.body.password) {
            
            return res.status(400).json({ "message": "Please enter the password" })
        }
        await register.findOne({ email: req.body.email })
            .then(async (user) => {
                if (user) {
                    const check = await password.passwordCompare(req.body.password, user.password);
                    if (check == true) {
                        if (user.isVerified === true) {
                            const token = await jwt.createJwt(req);
                            let obj = {
                                'autherization': true,
                                'token': token,
                                'user': user,
                            }
                            res.status(200).json({ success: true,message:"Login successfully", obj })
                        } else {
                            res.status(400).json({ success: false, message: 'Please verify your account.!' })
                        }
                    } else {
                        res.status(400).json({ success: false, message: 'Please check your password!' });
                    }
                } else {
                    res.status(400).json({ success: false, message: 'Please enter registered  Email Address !' })
                }
            });
    }
    catch (err) {
        return (err)
    }
}

exports.getUsers= async (req,res)=>{
    console.log("Get User data api is triggred")
    try{
        let data = await register.findOne({email:req.params.email})
        console.log("---------------->",data)
        if(!data){
            return res.status(400).send({message:'something went wrong'});
        }
        else{
            res.status(200).json({ success: true,message:"Data received", data})
        }
    }
    catch(err){}
    
}