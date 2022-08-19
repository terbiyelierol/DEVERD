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
import { Route, Routes } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'



function App() {
  const [user,setUser] = useState(null)
  const [singlePosts,setSinglePosts] = useState([])
  let [userLikes,setUserLikes] = useState([])
  let [userBookMarks,setUserBookMarks] = useState([])

  const userLog = (incomingUser) =>{
    setUser(incomingUser)
  }

console.log(userLikes)
  
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
    console.log(response)
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
    console.log(response[0].likes)

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
  console.log(response)

  setUserBookMarks(response[0].bookmarks)    
  
}

  
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Landing user={user}/>}/>
        <Route path='/login' element={<Login user={user} userLog={userLog}/>}/>
        <Route path='/createuser' element={<CreateUser user={user} userLog={userLog}/>}/>
        <Route path='/main' element={<Main user={user} userLog={userLog} handleLogOut={handleLogOut}/>}/>
        <Route path='/createpost' element={<CreatePost user={user} userLog={userLog} handleLogOut={handleLogOut}/>}/>
        <Route path=':username' element={<DashBoard getUserBookMarks={getUserBookMarks} getUserLikePosts={getUserLikePosts} getSinglePosts={getSinglePosts} user={user} userLog={userLog} handleLogOut={handleLogOut}/>}/>
        <Route path=':username/:id' element={<PostPage user={user} userLog={userLog} handleLogOut={handleLogOut}/>}/>
        <Route path=':username/:id/edit' element={<EditPost user={user} singlePosts={singlePosts} userLog={userLog} handleLogOut={handleLogOut}/>}/>
        <Route path=':username/bookmarks' element={<BookMarkPage userBookMarks={userBookMarks}  user={user} singlePosts={singlePosts} userLog={userLog} handleLogOut={handleLogOut}/>}/>
        <Route path=':username/likeposts' element={<LikePostPage userLikes={userLikes} user={user} userLog={userLog} singlePosts={singlePosts} handleLogOut={handleLogOut}/>}/>
     </Routes> 
    </div>
  );
}

export default App;
