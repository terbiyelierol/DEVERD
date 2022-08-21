const express = require('express')
const router = express.Router()
const messagesCtrl = require('../../controllers/messages')

router.post('/', messagesCtrl.create)

module.exports = router;