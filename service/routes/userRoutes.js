const express = require('express');
const router = express.Router();
const{register}=require('../controllers/register');
const{mailVerfiy}= require('../controllers/mailVerfiy');
const{login,getUsers} = require('../controllers/login');
const{bikeTypes,GetBikeData}=require('../controllers/bikename');
const{ServiceType,GetServices,EngineOil,battery,getEngineOil}=require('../controllers/servicesInfo');
const{booking,userBookData}=require('../controllers/userBookingData');
const{ContactUs}=require('../controllers/contact');
const{UpdateProfile}=require('../controllers/profile');
const{UpdateUserProfile}=require('../controllers/profileUpdate');
const{fileUpload}=require('../controllers/fileUpload')
const multer = require("multer")

const FILE_TYPE_MAP = {
    "image/png": "png",
    "image/pdf": "pdf",
  };
  
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const isValid = FILE_TYPE_MAP[file.mimetype];
      let uploadError = new Error("invalid image type");
  
      if (isValid) {
        uploadError = null;
      }
      cb(null, "public/uploads");
    },
    filename: function (req, file, cb) {
      const filename = file.originalname;
      console.log(filename);
  
      cb(null, `${Date.now()}-${filename}`);
    },
  });
  
  const uploadoptions = multer({ storage: storage });

router.post('/register',register);
router.get('/confirm/:email/:token',mailVerfiy);
router.post('/login',login);
router.get('/getUsers/:email',getUsers);
router.post('/bikename',bikeTypes);
router.get('/getBikes',GetBikeData);
router.post('/Services',ServiceType);
router.get('/getServices',GetServices);
router.post('/Oils',EngineOil);
router.post('/battery',battery);
router.post('/userBooking',booking);
router.get('/getEngineOil',getEngineOil)
router.get('/getBookData/:userID',userBookData)
router.post('/contactUs',ContactUs)
router.put('/UpdateProfile/:userId',uploadoptions.single("file"),UpdateProfile)
router.put("/UpdateUserProfile/:userId",UpdateUserProfile)
router.put('/fileUpload/:userId',uploadoptions.single("file"),fileUpload)

module.exports=router;