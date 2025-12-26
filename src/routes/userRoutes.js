const routes = require('express').Router();
const {register, login, getUserById, updateUser}=require('../controllers/userController');
const authMid = require('../middlewares/auth.middleware');
const inputValidation = require('../middlewares/validation');
const { router } = require('../app');

routes.post('/register', inputValidation, register);
routes.post('/login', inputValidation, authMid, login);
router.put('/update/:id', authMid, updateUser)
router.get('/getUserById/:id', authMid, getUserById)


module.exports = routes;