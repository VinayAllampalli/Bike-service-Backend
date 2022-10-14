const Service = require('../models/serviceInfo')

exports.ServiceType = async (req, res) => {
    console.log("Service Api Triggered")
    try {
        service = await Service.findOne({ ServiceName: req.body.ServiceName })
        console.log("----->", service)
        if (service) {
            return res.status(400).json({ message: 'Service name already exists' })
        }
        else {
            result = new Service(req.body);
            if (result) {
                console.log("--------->", result)
                result.save()
                res.status(200).json({ success: true, "message": " Sucessfully saved" })
            }
            else {
                res.status(400).json({ success: false, "message": "something went wrong" });
            }
        }

    }
    catch (err) {
        res.status(400).send(err);
        console.log(err)

    }
}

exports.GetServices = async (req, res) => {
    console.log("get Service api triggred")
    try {
        let data = await Service.find({}, { _id: 0 })
        if (data) {
            res.status(200).json({ success: true, data })
        }
        else {
            res.status(400).json({ success: false, message: "Something went Wrong" })
        }
    }
    catch (err) {
        res.status(400).send(err);
        console.log(err)
    }
}


exports.EngineOil = async (req, res) => {
    console.log("EngineOil api is triggred")
    console.log(req.body)
    try {
        let oil = await Service.findOneAndUpdate({ ServiceName: 'EngineOil' }, {
            $push: {
                EngineOil: [{
                    EngineOilName: req.body.EngineOilName,
                    EngineOilPrice: req.body.EngineOilPrice,
                    TankCapacity: req.body.TankCapacity
                }]
            }
        })
        if (oil) {
            res.status(200).json({ success: true, "message": " Sucessfully saved" })
        }
        else {
            res.status(400).json({ success: false, "message": "something went wrong" });
        }
    }
    catch (err) {
        res.status(400).send(err);
        console.log(err)
    }
}

exports.battery= async(req,res)=>{
    console.log("Battery Api is triggred ")
    console.log(req.body)
    try {
        let battery = await Service.findOneAndUpdate({ ServiceName: 'BatteryChange' }, {
            $push: {
                Battery: [{
                    BatteryName: req.body.BatteryName,
                    BatteryPrice: req.body.BatteryPrice,
                
                }]
            }
        })
        if (battery) {
            res.status(200).json({ success: true, "message": " Sucessfully saved" })
        }
        else {
            res.status(400).json({ success: false, "message": "something went wrong" });
        }
    }
    catch (err) {
        res.status(400).send(err);
        console.log(err)
    }

}

exports.getEngineOil = async(req,res)=>{
console.log("get EngineOil Api is triggred")

try{
    let oil = await Service.findOne({ ServiceName: 'EngineOil' })
    if(oil){
        res.status(200).json({success:true,oil})
    }
    else{
        res.status(400).json({success:false,message:"Something went Wrong"})
    }

}
catch(err){
    res.status(400).send(err);
    console.log(err)

}
}
