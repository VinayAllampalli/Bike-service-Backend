// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cors = require('cors');
// const bodyParser = require('body-parser');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// require("dotenv").config()
// require("./connections/db")
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// // var router = express.Router();

// var app = express();
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(cookieParser());
// app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// var routeConfig = require('./routesConfig/routes-config')

// //routes initials
// app.use('/api',routeConfig)

// const PORT = process.env.port||3000
// app.listen(PORT,()=>{
//     console.log(`server runs at ${PORT}`)
// })

// module.exports = app;

const { v4: uuidv4 } = require('uuid');


var dotEnv=require('dotenv');
dotEnv.config();
require("./connections/db")
const port= process.env.PORT || 3000

const bodyParser = require('body-parser');
const express=require('express');
const cors = require('cors');
var app = express();
var router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());
var routeConfig = require('./routesConfig/routes-config')

//routes initials
app.use('/api',routeConfig)

app.listen(port,()=> console.log(`server listning on port ${port}`))
console.log("----->",uuidv4())


// youtube link for twilio setup and code  https://youtu.be/PxphXQmtHLo
// npm install twilio
// for account login in twilio use Email:samplemailid705@gmial.com passcode:VinayAllampalli@1998

require('dotenv').config();

const accountSid = "AC08d39d7f928f6c745cd8bbb80765d472";
const authToken = "98bded1a8029ae0d6e80d87f05f73233";
const client = require('twilio')(accountSid, authToken);
client.messages
.create({
    from:'whatsapp:+14155238886',
    to:'whatsapp:+917093116069',
    body:'hi friends',
    url: 'http://demo.twilio.com/docs/voice.xml'
}).then (message=>{
    console.log(message.sid)
})
.catch(err => console.log("------>",err));

