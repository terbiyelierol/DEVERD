const express = require('express')
const router = express.Router()
const messagesCtrl = require('../../controllers/messages')

router.post('/', messagesCtrl.create)
router.get('/:roomId', messagesCtrl.getAllMessages)

module.exports = router;