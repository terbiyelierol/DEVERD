// const Conversation = require('../models/conversation')
const Messages = require('../models/message')
const Conversation = require('../models/conversation')

module.exports = {
  create,
  getAllMessages,
}

//new text chat
async function create(req, res) {
  const newMessage = new Messages(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getAllMessages(req, res) {
  try {
    let allMessages = await Messages.find({conversationId:req.params.roomId}).populate('sender')
    res.status(200).json(allMessages);
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
}
