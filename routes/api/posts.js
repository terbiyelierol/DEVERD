const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/posts')

router.post('/createpost', postsCtrl.create)
router.get('/main', postsCtrl.index)
router.get('/:username', postsCtrl.userIndex)
router.get('/:username/:id', postsCtrl.postShow)

module.exports = router;