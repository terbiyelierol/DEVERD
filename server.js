const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors'); 

require('dotenv').config()
require('./config/database.js')

app.use(logger('dev'));
app.use(express.json());
app.use(cors())


app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(require('./config/auth'));
// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/conversations', require('./routes/api/conversations'));
app.use('/api/messages', require('./routes/api/messages'));
// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work



const port = process.env.PORT || 3001;

const server = app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
})

const io = require("socket.io")(server,{
  cors:{
    origin:"*",
    methods:["GET","POST"]
  }
})

let users = []
console.log(users)

const addUser =(userId,socketId)=>{
  !users.some((user)=>user.userId === userId)&&
    users.push({userId,socketId})
}

const removeUser=(socketId)=>{
  users = users.filter(user=>user.socketId !== socketId)
}

const getUser = (userId)=>{
  return users.find(user=>user.userId === userId)
}

io.on('connection',socket=>{
  // when connect
   console.log("New client connected Erol");
  // take userId and socketId from user
  socket.on('sendUser',(userId)=>{
    addUser(userId,socket.id)
    io.emit("getUsers",users)
  })

  // send and get Message
  socket.on("sendMessage",({senderId,receiverId,text})=>{
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage",{
      senderId,
      text
    })
  })


  // when disconnect
   socket.on("disconnect",()=>{
    console.log("A User Disconnected "+ socket.id)
    removeUser(socket.id)
    io.emit("getUsers",users)
   })
})

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



