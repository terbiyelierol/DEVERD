const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/posts')

router.post('/createpost', postsCtrl.create)
router.get('/main', postsCtrl.index)
router.get('/:username', postsCtrl.userIndex)
router.get('/:username/:id', postsCtrl.postShow)
router.delete('/:username/:id', postsCtrl.postDelete)
router.get('/:username/:id/edit', postsCtrl.postEditShow)
router.patch('/:username/:id', postsCtrl.postEdit)
router.patch('/userLikes', postsCtrl.postLikes)

module.exports = router;