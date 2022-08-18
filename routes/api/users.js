const express = require('express')
const router = express.Router()
const usersCtrl  =require('../../controllers/users.js')

router.post('/createuser', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.patch('/bookMark',usersCtrl.postBookMark)
module.exports = router;