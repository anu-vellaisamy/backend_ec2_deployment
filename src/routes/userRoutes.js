const routes = require('express').Router();
const {register, login, getUserById, updateUser}=require('../controllers/userController');
const authMid = require('../middlewares/auth.middleware');
const {registerValidation, loginValidation, handleValidation} = require('../middlewares/validation');
const { router } = require('../app');

routes.post('/register', registerValidation, register);
routes.post('/login', loginValidation, authMid, login);
routes.put('/update/:id', authMid, updateUser)
routes.get('/getUserById/:id', authMid, getUserById)


module.exports = routes;