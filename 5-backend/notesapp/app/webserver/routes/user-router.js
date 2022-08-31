'use strict';

const express = require('express');
const multer = require('multer');
const checkAccountSession = require('../controllers/account/check-account-session');
const uploadAvatar = require('../controllers/user/upload-avatar-controller');

const upload = multer();
const router = express.Router();

/**
 * tenemos un user y el user tiene:
 *  email, password, avatar_url, name, surname, address, age, gender, etc
 * 
 * Rest podemos tener / verlo como 2 opciones:
 * a) PUT /users y aquí modificaríamos los atributos que permitamos modificar
 * b) POST /users/ATRIBUTO_CONCRETO para añadir un recurso
 *  */

router.post('/users/avatar', checkAccountSession, upload.single('avatar'), uploadAvatar);

module.exports = router;
