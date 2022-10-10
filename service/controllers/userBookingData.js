const Booking = require('../models/userBooking')
const crypto = require('crypto')

exports.booking = async (req, res) => {
    let OrderId;
    crypto.randomInt(0, 10000, (err, n) => {
      if (err) throw err;
      OrderId = n.toString().padStart(4, "0");
    //   req.body.OrderId = OrderId
    
      console.log(req.body.OrderId)
    })
  
    console.log("booking Api Triggered")
    try{
        
        console.log(req.body)
       const order = new Booking({
        userDetails: req.body.userDetails,
        Orderid:OrderId,
        serviceList:req.body.serviceList,
        Amount:req.body.Amount
        })
        console.log("--------->",order)
        await order.save();
        // await book.save();
        res.status(200).json({"message":"success"})

    }
    catch(err){
        console.log(err)
        res.status(400).json({"message":"fail"})

    }

}