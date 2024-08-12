const express = require('express');
const router = express.Router();
const { postUser , getUser} = require('../controller/user');
router.post('/sign', postUser);
router.get('/user',getUser)
module.exports = router;
