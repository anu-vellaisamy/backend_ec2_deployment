const User = require('../models/userModel');


const fullList = async(req, res)=>{
    try{
        const userList = await User.find({});
        if(!userList){
            return res.status(400).json({
                success: false,
                message: "User not authenticated"
            })
        }
        return res.json({
            message: "Get full use list",
            totalUserCount:userList.length,
            Data: userList
        })
    }catch (e) {
        return res.status(404).json({
            success: false,
            message: "Ser has some error " + e
        })
    }
}

const deleteUser = async(req, res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }
        return res.json({
            message: "User deleted successfully",
            Data: user._id
        })
    }catch (e) {
        return res.status(404).json({
            success: false,
            message: "Server has some error " + e
        })
    }
} 


module.exports = { fullList, deleteUser};