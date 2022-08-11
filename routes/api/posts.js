const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/posts')

router.post('/createpost', postsCtrl.create)
router.get('/main', postsCtrl.index)

module.exports = router;