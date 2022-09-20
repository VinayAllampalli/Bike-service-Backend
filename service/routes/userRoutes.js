const express = require('express');
const router = express.Router();
const{register}=require('../controllers/register');
const{mailVerfiy}= require('../controllers/mailVerfiy');
const{login,getUsers} = require('../controllers/login');
const{bikeTypes,GetBikeData}=require('../controllers/bikename');
const{engineOil,GetEngineoil}=require('../controllers/engineOil');
const{Battery,GetBattery}=require('../controllers/battery');
const{ServiceType,GetServices,ServicePrice}=require('../controllers/servicesInfo')

router.post('/register',register);
router.get('/confirm/:email/:token',mailVerfiy);
router.post('/login',login);
router.get('/getUsers/:email',getUsers);
router.post('/bikename',bikeTypes);
router.get('/getBikes',GetBikeData);
router.post('/engineOil',engineOil);
router.post('/batteries',Battery);
router.get('/getEngineOil',GetEngineoil);
router.get('/getBattery',GetBattery);
router.post('/Services',ServiceType);
router.get('/getServices',GetServices);
router.get('/ServicePrice',ServicePrice)

module.exports=router;