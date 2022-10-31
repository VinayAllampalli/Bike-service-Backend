const express = require('express');
const router = express.Router();
const{register}=require('../controllers/register');
const{mailVerfiy}= require('../controllers/mailVerfiy');
const{login,getUsers} = require('../controllers/login');
const{bikeTypes,GetBikeData}=require('../controllers/bikename');
const{ServiceType,GetServices,EngineOil,battery,getEngineOil}=require('../controllers/servicesInfo');
const{booking,userBookData}=require('../controllers/userBookingData')
const{ContactUs}=require('../controllers/contact')
const{UpdateProfile}=require('../controllers/profile')

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
router.put('/UpdateProfile/:userId',UpdateProfile)

module.exports=router;