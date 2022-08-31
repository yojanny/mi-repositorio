'use strict';

const express = require('express');

const router = express.Router();

router.get('/calculadora/sum2', (req, res) => { res.send('hola mundo desde sum2') });
router.get('/calculadora/sub2', (req, res) => { res.send('hola mundo desde sub2') });

module.exports = router;
