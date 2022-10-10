const express = require('express');
const router = express.Router();
const{register}=require('../controllers/register');
const{mailVerfiy}= require('../controllers/mailVerfiy');
const{login,getUsers} = require('../controllers/login');
const{bikeTypes,GetBikeData}=require('../controllers/bikename');
const{ServiceType,GetServices,EngineOil,battery}=require('../controllers/servicesInfo');
const{booking}=require('../controllers/userBookingData')

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

module.exports=router;