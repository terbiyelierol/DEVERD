const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  title: String,
  body: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  },
  likedBy: [{ type: mongoose.Types.ObjectId, ref: 'User' }]},
  {
    timestamps: true
  })

module.exports = mongoose.model('Post', postSchema);