const express = require('express')
const router = express.Router()
const conversationsCtrl = require('../../controllers/conversations')

router.post('/', conversationsCtrl.create)
// router.get('/:roomId', conversationsCtrl.getRoomId)
router.get('/:userId',conversationsCtrl.getUserId)

module.exports = router;