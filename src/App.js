import './App.css';
import React, { useState,useEffect } from 'react';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import DashBoard from './pages/DashBoard/DashBoard'
import CreateUser from './pages/CreateUser/CreateUser';
import CreatePost from './pages/CreatePost/CreatePost';
import PostPage from './pages/PostPage/PostPage';
import EditPost from './pages/EditPost/EditPost'
import BookMarkPage from './pages/BookMarkPage/BookMarkPage'
import LikePostPage from './pages/LikePostPage/LikePostPage'
import ConverstationPage from './pages/ConversationPage/ConversationPage'
import MessagePage from './pages/MessagePage/MessagePage';
import { Route, Routes } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

function App() {
  const [user,setUser] = useState(null)
  const [singlePosts,setSinglePosts] = useState([])
  let [userLikes,setUserLikes] = useState([])
  let [converId,setConverId] = useState(null)
  let [userBookMarks,setUserBookMarks] = useState([])
  let [friend,setFriend] = useState(null)
  let [cross,setCross] = useState([])




  const userLog = (incomingUser) =>{
    setUser(incomingUser)
  }

  const friendId =(incomingFriend,crossMember)=>{
    setConverId(incomingFriend)
    setCross(crossMember)
  }

  
  const navigate = useNavigate()

  const handleLogOut = () =>{
    localStorage.removeItem("token");
    setUser(null)
    navigate('../')
  }

  async function getSinglePosts(user,iden,pro) {
    let fetchResponse = await fetch(`/api/posts/${user}/${pro}/edit`,{
      method: 'GET',
      headers: { 
        "Content-Type": "string",
        body:iden },
    })
    let response =  await fetchResponse.json()
    setSinglePosts(response)
    navigate(`../${user}/${pro}/edit`)
  }


  async function getUserLikePosts(user,token) {

    let fetchLikeResponse = await fetch(`/api/users/${user}/likeposts`,{
      method: 'GET',
      headers: { 
        // "Content-Type": "application/json",
        'Authorization':'Bearer '+ token },
    }
    )
    let response =  await fetchLikeResponse.json()

    setUserLikes(response[0].likes)    
    
}

async function getUserBookMarks(user,token) {

  let fetchBookResponse = await fetch(`/api/users/${user}/bookmarks`,{
    method: 'GET',
    headers: { 
      // "Content-Type": "application/json",
      'Authorization':'Bearer '+ token },
  }
  )
  let response =  await fetchBookResponse.json()

  setUserBookMarks(response[0].bookmarks)    
  
}

const createRoom = async(senderId,receiverId)=>{
  try {
    // 1. POST our post user info to the server
    const createRoomResponse = await fetch('/api/conversations', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({senderId,receiverId})
    })
    // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
    if (!createRoomResponse.ok) throw new Error('Fetch failed - Bad request')   
    let fetchcreateRoomResponse = await createRoomResponse.json()
    console.log('Success',fetchcreateRoomResponse)
    setConverId(fetchcreateRoomResponse._id)
    navigate(`../conversations/${fetchcreateRoomResponse._id}`)
  } catch (err) {
    console.log("SignupForm error", err)
  }
}

  
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Landing user={user}/>}/>
        <Route path='/login' element={<Login user={user} userLog={userLog}/>}/>
        <Route path='/createuser' element={<CreateUser user={user} userLog={userLog}/>}/>
        <Route path='/main' element={<Main user={user} handleLogOut={handleLogOut}/>}/>
        <Route path='/createpost' element={<CreatePost user={user}  handleLogOut={handleLogOut}/>}/>
        <Route path=':username' element={<DashBoard getUserBookMarks={getUserBookMarks} getUserLikePosts={getUserLikePosts} getSinglePosts={getSinglePosts} user={user}  handleLogOut={handleLogOut}/>}/>
        <Route path=':username/:id' element={<PostPage  createRoom={createRoom} user={user} handleLogOut={handleLogOut}/>}/>
        <Route path=':username/:id/edit' element={<EditPost user={user} singlePosts={singlePosts}  handleLogOut={handleLogOut}/>}/>
        <Route path=':username/bookmarks' element={<BookMarkPage userBookMarks={userBookMarks}  user={user} singlePosts={singlePosts} userLog={userLog} handleLogOut={handleLogOut}/>}/>
        <Route path=':username/likeposts' element={<LikePostPage userLikes={userLikes} user={user}  singlePosts={singlePosts} handleLogOut={handleLogOut}/>}/>
        <Route path={`/conversations/${converId}`} element={<ConverstationPage cross={cross} friend={friend} converId={converId} user={user}  handleLogOut={handleLogOut}/>}/>
        <Route path={`/conversations/:userId`} element={<MessagePage friendId={friendId}  user={user}  handleLogOut={handleLogOut}/>}/>
        <Route path={`/conversations/:userId/${converId}`} element={<ConverstationPage cross={cross} friend={friend} converId={converId} user={user}  handleLogOut={handleLogOut}/>}/>
     </Routes> 
    </div>
  );
}

// friendId={friendId}

export default App;
