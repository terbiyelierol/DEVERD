const User = require('../models/user')
const Post = require('../models/post')

module.exports = {
  create,
  index,
  userIndex,
}

async function create(req, res) {
  try {
    const user = await User.findById(req.body.user)
    const post = await Post.create({title: req.body.title, body: req.body.body, createdBy:user})
    res.status(200).json(post); // send it to the frontend
  } catch (err) {
    res.status(400).json(err);
  }
}

async function index(req, res) {
  try {
    let posts = await Post.find()
    res.status(200).json(posts)
  } catch(err) {
    res.status(400).json(err);
  }
}

async function userIndex(req, res) {
  console.log(req)
  try {
    const user = await User.findById()
   
    let posts = await Post.find(user)
   
    res.status(200).json(posts)
  } catch(err) {
    res.status(400).json(err);
  }
}