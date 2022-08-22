// const Conversation = require('../models/conversation')
const Messages = require('../models/message')
const Conversation = require('../models/conversation')

module.exports = {
  create,
  getAllMessages,
}

//new text chat
async function create(req, res) {
  console.log(req.body)
  const newMessage = new Messages(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getAllMessages(req, res) {
  console.log(req.params.roomId)
  try {
    let allMessages = await Messages.find({conversationId:req.params.roomId})
    console.log(allMessages)
    res.status(200).json(allMessages);
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
}
