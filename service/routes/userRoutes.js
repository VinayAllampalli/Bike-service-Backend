const express = require('express')
const router = express.Router();
const{userData,getUsers}=require('../controllers/register')

router.post('/userData',userData);
router.get('/getUserData',getUsers)
module.exports=router;