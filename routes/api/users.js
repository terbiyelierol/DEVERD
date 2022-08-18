const express = require('express')
const router = express.Router()
const usersCtrl  =require('../../controllers/users.js')

router.post('/createuser', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.patch('/bookMark',usersCtrl.postBookMark)
router.patch('/likePost',usersCtrl.postLike)
router.get('/:username/likeposts',usersCtrl.userLikePosts)
module.exports = router;