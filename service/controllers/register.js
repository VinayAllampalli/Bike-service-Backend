// const user = require('../models/register')

// exports.userData = async(req,res) =>{
//     console.log("....Hii>>>>>>>>>")
// try{
//     const emp =  await user.findOne({ userName: req.body.userName });
//     if(emp){
//         res.send({message: "username is already exist"})
// }
// else{
//     const data = new user(req.body);
//     const result = await data.save();
//     res.status(200).json({ success: true, result: result });
// }

// }
// catch(err){
//     console.log(err);
//     res.status(500).json({ sucess: false });
// }}

// exports.getUsers = async(req,res)=>{
//     try{
//         let data = await user.find()
//         res.status(200).json({sucess:true,result:data})
        
//     } catch(err){
//         console.log(err);
//         res.status(500).json({ sucess: false });
//     }
   

// }

var crypto = require('crypto');
var User = require('../models/register');
var Token = require('../models/Token');
const nodemailer = require('nodemailer');
const Password = require('../utils/password');

exports.register =async (req,res)=>{
    // console.log("request",req.body);
    try{
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            return res.status(500).json({msg: err.message});
        }
        else if (user){
            return res.status(400).json({message:'User already exists'})
        }
        else{
            // req.body.password=password.passwordHash(req.body.password)
            User.find().sort({userId: -1}).limit(1).then((data)=>{  
                if(data){
                    let tsId
                    let checkLen = data.length
                    if(checkLen>0){
                    let checkLastId = data[0].userId.split("TS-U-")
                    let  checklastInc = (Number(checkLastId[1])) + 1
                    tsId = "TS-U-"+checklastInc
                    }

               let updateNo = checkLen !=0 ? tsId : "TS-U-1"
                    // let updateUnitNo=data.length>0?data[0].unitNo+1:1;
                    console.log(">>>>>>",updateNo)
                    user = new User({
                        username : req.body.username,
                        email : req.body.email,
                        password: Password.passwordHash(req.body.password),
                        userId : updateNo
                    })
                
                
            // user = new User(req.body);
            console.log("-------------->",user)

            var token = new Token({_userId: user._id, token: crypto.randomBytes(16).toString('hex')});
            token.save(function(err){
                if(err){
                    return res.status(404).json({message:err.message});
                }
                var transporter = nodemailer.createTransport({
                    host:'smtp.gmail.com',
                    port:587,
                    secure:false,
                    auth: { user:'samplemailid705@gmail.com', pass:'ixtbegjtpgumfrfn' },
                    tls: {rejectUnauthorized: false}
                });
                var mailOptions = {from: 'samplemailid705@gmail.com', to: user.email , subject: 'User Activation',
                html:'<body style="backgroud-color:white;margin-left:30px;"><div class="container"><p style="font-size:16px;color:green">Hello Mr/Mrs '
                + req.body.firstName + req.body.lastName + ' ' + ' Please verify your account by clicking the link: </p>'+'\n' 
                +'<p style="font-size:16px;color:red;">Please click on the following link, or paste this into your browser to complete the process</p>'+'\n'
                +'<a style="border-radius:10px 10px 10px;margin-left:300px;margin-top:2px;font-size:18px;text-align:center;text-decoration:none;display:inline-block; background-color: #1c87c9;border:none;padding: 5px;padding-left:20px;padding-right:20px;text-align:center;color: white;" href=http://localhost:4200/confirm/'+user.email+ '/' + token.token +'>'+"Click here for Activation" +"</a>" +
                '<br>'+'<p style="font-size:16px;color:green">If you did not request this, please ignore this email and your email will remain AnActive</p></div><body>'
               };
               transporter.sendMail(mailOptions,function(err){
                   if (err){
                    console.log(err)
                       return res.status(400).json({message:' Please try again after some time.'});
                   }
                    return res.status(200).json({success: true, message:'A verification email has been sent to ' + user.email + '. It will be valid upto 24 hours.'})
               });
            });

            user.save((err,user)=>{
                if(err){
                    return res.status(500).json({message:err.message});
                }
               
            });
        }
    });
}
    })
}
    catch(err){
       res.send(err)
    }
}



