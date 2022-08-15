import './App.css';
import React, { useState,useEffect } from 'react';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import DashBoard from './pages/DashBoard/DashBoard'
import CreateUser from './pages/CreateUser/CreateUser';
import CreatePost from './pages/CreatePost/CreatePost';
import PostPage from './pages/PostPage/PostPage';
import { Route, Routes } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'



function App() {
  const [user,setUser] = useState(null)
  const [id,setId] = useState(null)
  let [userPosts, setUserPosts] = useState([])
 
  const postId = (incomingId) =>{
    setId(incomingId)
  }

  const userLog = (incomingUser) =>{
    setUser(incomingUser)
  }
  console.log(user)
  
  const navigate = useNavigate()

  const handleLogOut = () =>{
    localStorage.removeItem("token");
    setUser(null)
    navigate('../')
  }

 
  
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Landing user={user}/>}/>
        <Route path='/login' element={<Login user={user} userLog={userLog}/>}/>
        <Route path='/createuser' element={<CreateUser user={user} userLog={userLog}/>}/>
        <Route path='/main' element={<Main user={user} userLog={userLog} handleLogOut={handleLogOut}/>}/>
        <Route path='/createpost' element={<CreatePost user={user} userLog={userLog} handleLogOut={handleLogOut}/>}/>
        <Route path=':username' element={<DashBoard user={user} userLog={userLog} handleLogOut={handleLogOut}/>}/>
        <Route path=':username/:id' element={<PostPage postId = {postId} user={user} userLog={userLog} handleLogOut={handleLogOut}/>}/>
     </Routes> 
    </div>
  );
}

export default App;
