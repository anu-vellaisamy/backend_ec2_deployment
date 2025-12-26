const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min:6
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    resetToken: String,
  resetExpires: Date,
  refreshToken: String
}, {timestamps: true, versionKey: false});



module.exports = mongoose.model('User', userSchema);