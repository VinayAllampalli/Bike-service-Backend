const MYDATA = require("../models/mydata");
exports.PersonalData = async (req, res) => {
  try {
    data = await MYDATA.findOne({ Name: req.body.Name });
    console.log("----->", data.Name);
    if (data != null || data != undefined) {
      console.log("data.id",data._id);
      console.log('----?',req.body)
      data2 = MYDATA.findOneAndUpdate(
        { _id:data._id},
        {
          $push: {
            Details: {
              CompanyName: req.body.Details.CompanyName,
              DOJ: req.body.Details.DOJ,
              CTC: req.body.Details.CTC,
            },
          },
        },
        (err) => {
          console.log("/////",err)
        },
     
      );
      console.log("========>", data2.Details);
      return res.status(200).json({ message: "New Record Pushed" });
    } else {
      result = new MYDATA(req.body);
      if (result) {
        console.log("--------->", result);
        result.save();
        res.status(200).json({ success: true, message: " Sucessfully saved" });
      } else {
        res
          .status(400)
          .json({ success: false, message: "something went wrong" });
      }
    }
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

exports.getallmydata = async(req,res)=>{
  console.log("Get All my data Api is Triggred ");
  try{
    let data = await MYDATA.find()
    if(data){
        res.status(200).json({success:true,data})
    }
    else{
        res.status(400).json({success:false,message:"Something went Wrong"})
    }
   
  }
  catch(err){
    console.log(err);
    res.status(400).send(err);
  }
}
