const {body, validationResult} = require("express-validator");

const registerValidation = [
  body('email').isEmail().withMessage('Valid email required'),
  body('password').isLength({ min: 6 }).withMessage('Password min 6 chars')
]

const loginValidation = [
  body('email').isEmail().withMessage('Valid email required'),
  body('password').exists().withMessage('Password required')
]

const handleValidation=(req, res, next)=>{
   const errors = validationResult(req);
   if(!errors){
    return res.status(422).json({error: errors.array()})
   }
    next();
}


module.exports = { registerValidation, loginValidation, handleValidation }