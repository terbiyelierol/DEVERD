// const Conversation = require('../models/conversation')
const Messages = require('../models/message')

module.exports = {
  create,
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
