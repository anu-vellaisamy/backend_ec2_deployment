const adminCheck = (req, res, next)=>{
    if(req.user.role !== "admin"){
        return  res.json({
            success: false,
            message: "Admin only access",
           })
    }

    next()

}

module.exports = adminCheck;