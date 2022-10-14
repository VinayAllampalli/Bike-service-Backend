const Booking = require('../models/userBooking')

exports.booking = async (req, res) => {
    console.log("booking Api Triggered")
    try{
        console.log(req.body)
        const book = new Booking(req.body)
        console.log("--------->",book)
        await book.save();
        res.status(200).json({"message":"success"})

    }
    catch(err){
        console.log(err)
        res.status(400).json({"message":"fail"})

    }

}

exports.userBookData= async(req,res)=>{
    try{
        console.log("book Data Api Triggered")
        let getData = await Booking.find({userID:req.params.userID})
        console.log("______",getData)
       
          if (!getData) {
            return res.status(500).json({ message: err.message });
          }
          
          else {
            res.status(200).json({ success: true, "message": "Success" ,getData});
          }
        }
    
      
    catch(err){
        console.log(err);
      res.status(404).json({'message':"fail"})
  
    }
}