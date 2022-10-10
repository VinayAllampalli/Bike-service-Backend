var register = require('../models/register')
var token = require('../models/Token');

exports.mailVerfiy = async (req, res)=> {
    console.log("mail verfiy api triggred")
    try{
    

    token.findOne({ token: req.params.token }, function (err, token) {
        
        // token is not found into database i.e. token may have expired 
        if (!token){
            return res.status(400).send({msg:'Your verification link has expired.'});
        }
        // if token is found then check valid user 
        else{
            register.findOne({ _id: token._userId, email: req.params.email }, function (err, user) {
                if (!user){
                    return res.status(401).json({msg:'We were unable to complete this verification. Please try again later!'});
                } 
                else if (user.isVerified){
                    return res.status(200).json({ success: false, message: 'User already verified. Please Login' }); 
                }
                // verify user
                else{
                    // change isVerified to true
                    user.isVerified = true;
                    user.save(function (err) {
                        // error occur
                        if(err){
                            return res.status(500).json({msg: err.message});
                        }
                        // account successfully verified
                        else{
                        return res.status(200).json({ success: true, message: 'Your Account verification is successful!' });  
                        }
                    });
                }
            });
        }
        
        
     });
    }
    catch(err){
      res.send(errr)
    }
    
    }



