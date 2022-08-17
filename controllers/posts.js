const User = require('../models/user')
const Post = require('../models/post')

module.exports = {
  create,
  index,
  userIndex,
  postShow,
  postDelete,
  postEditShow,
  postEdit
}

async function create(req, res) {
  try {
    const user = await User.findById(req.body.user)
    const post = await Post.create({title: req.body.title, body: req.body.body, createdBy:user,}) 
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
  try {
    const user = await User.findById(req.user)
    let posts = await Post.find({createdBy:user})
    res.status(200).json(posts)
  } catch(err) {
    res.status(400).json(err);
  }
}

async function postShow(req,res){
  try{
    const idPost = req.params.id
    let posts = await Post.findById(idPost)
    console.log(posts)
    res.status(200).json(posts)
  }catch(err){
    res.status(400).json(err);
  }
}


async function postDelete(req,res){
  console.log(req.params.id)
  try{
    const idPost = req.params.id
    let posts = await Post.findByIdAndDelete(idPost)
    console.log(posts)
    res.status(200).json(posts)
  }catch(err){
    res.status(400).json(err);
  }
}

async function postEditShow(req,res){
  console.log(req.params.id)
  try{
    const idPost = req.params.id
    let postShow = await Post.findById(idPost)
    console.log(postShow)
    res.status(200).json(postShow)
  }catch(err){
    res.status(400).json(err);
  }
}

async function postEdit(req,res){
  console.log(req.params.id)
  try{
    const idPost = req.params.id
    let postShow = await Post.findByIdAndUpdate(idPost)
    console.log(postShow)
    res.status(200).json(postShow)
  }catch(err){
    res.status(400).json(err);
  }
}