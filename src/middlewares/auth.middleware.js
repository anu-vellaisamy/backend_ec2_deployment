const jwt = require('jsonwebtoken');
const verifyToken = require('../utils/token')


const userAuth = async (req, res, next) => {
    try {
        const token = await req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.json({
                message: "Invalid token",
                success: false
            })
        }

        const tokenDataCheck = verifyToken(token);
        req.user = tokenDataCheck;
        next();
    } catch (error) {
        return res.json({
            message: "Invalid token " + error,
            success: false
        })
    }

}


module.exports = userAuth;