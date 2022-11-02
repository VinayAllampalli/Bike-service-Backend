var User = require('../models/register');
const Password = require('../utils/password');
exports.UpdateProfile = async (req, res) => {
    console.log("Update profile is triggred")
    try {
        console.log(req.body)
        const filename = req.file.filename;
      const basepath = `${req.protocol}://${req.get('host')}/public/uploads/`;
        const data = {
            username: req.body.username,
            password: Password.passwordHash(req.body.password),
            file: `${basepath}${filename}`,
        }
        let result = await User.findOneAndUpdate({ userId: req.params.userId }, { $set: data })
        if (result == null) {
            res.status(400).json({ success: false, message: "Profile is not exists" })
        }
        else {
            res.status(200).json({ success: true, message: "Updated successfully",data })
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ success: false })
    }
}
