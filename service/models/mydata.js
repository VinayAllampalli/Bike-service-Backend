const mongoose = require('mongoose')
const Mydata = new mongoose.Schema({
    Name:{
        type:String
       },
    Details:
        [{
           CompanyName :{
            type:String 
           },
           DOJ:{
            type: String
           },
           CTC:{
            type: Number 
           },
           
        }]
    
});
const Data = mongoose.model('myData',Mydata)
module.exports=Data;