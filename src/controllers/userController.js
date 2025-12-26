const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const accessToken = require("../utils/token.js")


const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const emailCheck = await User.find({ email });
        if (emailCheck) {
            return res.status(400).json({
                success: false,
                message: "User email already exists"
            });
        }
        const hashPass = await bcrypt.hash(password, 10);

        const saveUser = await User({
            name, email, password: hashPass
        });

        const savedData = saveUser.save();
        return res.status(200).json({
            success: true,
            message: "User register successfully",
            data: savedData
        })


    } catch (err) {
        return res.status(404).json({
            success: false,
            message: "Ser has some error " + err
        })
    }
}

const login = async (req, res) => {
    try {

        const { email, password } = req.body;
        const emailCheck = await User.find({ email });
        if (!emailCheck) {
            return res.status(400).json({
                success: false,
                message: "User email not exists"
            });
        }
        const comparPass = await bcrypt.compare(password, emailCheck.password);
        if (!comparPass) {
            return res.status(400).json({
                success: false,
                message: "Password not matched"
            });
        }

        const accessToken = accessToken({ _id: emailCheck._id, role: emailCheck.role || "user" })
        return res.json({
            success: true,
            message: "User logged in successfully",
            token: accessToken
        })

    } catch (e) {
        return res.status(404).json({
            success: false,
            message: "Ser has some error " + e
        })
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not authenticated"
            })
        }
        return res.json({
            message: "User details",
            Data: user
        })

    } catch (e) {
        return res.status(404).json({
            success: false,
            message: "Server has some error " + e
        })
    }
}

//update
const updateUser = async (req, res) => {

    try {
        const updatedUser =  User.findByIdAndUpdate(req.params.id,
            { $set: req.body }, { new: true, select: '-password'});

        if (!getUser) {
            return res.status(400).json({
                success: false,
                message: "User not indentified"
            })
        }
        // const findUpdatedUser = User.findById(req.params.id).select('-password');
        return res.status(200).json({
            success: true,
            message: "User updated successfully",
            updatedData: updatedUser
        })
    } catch (e) {
        return res.status(404).json({
            success: false,
            message: "Server has some error " + e
        })
    }


}


module.exports = { register, login, getUserById, updateUser }