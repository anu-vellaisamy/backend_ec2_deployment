const routes = require('express').Router();
const {fullList, deleteUser} =require('../controllers/adminController');
const authMid = require('../middlewares/auth.middleware');
const adminMid = require('../middlewares/admin.middleware');

routes.get('/fullList', authMid, adminMid, fullList);

routes.delete('/deleteUser', authMid, adminMid, deleteUser);


module.exports = routes;