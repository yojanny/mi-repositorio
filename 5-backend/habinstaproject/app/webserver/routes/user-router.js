'use strict';

const express = require('express');
const multer = require('multer');
const checkAccountSession = require('../controllers/account/check-account-session');
const checkAccountPermissions = require('../controllers/account/check-account-permissions');
const uploadAvatar = require('../controllers/user/upload-avatar-controller');
const updateUser = require('../controllers/user/update-user-controller');

const getAdminData1 = require('../controllers/user/get-admin-data1');
const getAdminData2 = require('../controllers/user/get-admin-data2');

const upload = multer();

const router = express.Router();

router.post('/users/avatar', checkAccountSession, upload.single('avatar'), uploadAvatar);
router.put('/users', checkAccountSession, updateUser);

router.get('/users/private-section-1', checkAccountSession, getAdminData1);
router.get('/users/private-section-2', checkAccountSession, checkAccountPermissions, getAdminData2);

module.exports = router;
