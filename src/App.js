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
import {useParams} from 'react-router-dom'



function App() {
  const [user,setUser] = useState(null)
  const [singlePosts,setSinglePosts] = useState([])
  let [userLikes,setUserLikes] = useState(null)
  const param = useParams() 
  let userToken = localStorage.getItem('token')

  const userLog = (incomingUser) =>{
    setUser(incomingUser)
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
    console.log(response)
    setSinglePosts(response)
    navigate(`../${user.username}/${singlePosts._id}/edit`)
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
    let mapRes = response.likes.map(like=>setUserLikes(like))
    console.log(mapRes)
    
    
}

 
  
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Landing user={user}/>}/>
        <Route path='/login' element={<Login user={user} userLog={userLog}/>}/>
        <Route path='/createuser' element={<CreateUser user={user} userLog={userLog}/>}/>
        <Route path='/main' element={<Main user={user} userLog={userLog} handleLogOut={handleLogOut}/>}/>
        <Route path='/createpost' element={<CreatePost user={user} userLog={userLog} handleLogOut={handleLogOut}/>}/>
        <Route path=':username' element={<DashBoard getUserLikePosts={getUserLikePosts} getSinglePosts={getSinglePosts} user={user} userLog={userLog} handleLogOut={handleLogOut}/>}/>
        <Route path=':username/:id' element={<PostPage user={user} userLog={userLog} handleLogOut={handleLogOut}/>}/>
        <Route path=':username/:id/edit' element={<EditPost user={user} singlePosts={singlePosts} userLog={userLog} handleLogOut={handleLogOut}/>}/>
        <Route path=':username/bookmarks' element={<BookMarkPage user={user} singlePosts={singlePosts} userLog={userLog} handleLogOut={handleLogOut}/>}/>
        <Route path=':username/likeposts' element={<LikePostPage userLikes={userLikes} user={user} userLog={userLog} singlePosts={singlePosts} handleLogOut={handleLogOut}/>}/>
     </Routes> 
    </div>
  );
}

export default App;
