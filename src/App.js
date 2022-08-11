import './App.css';
import React, { useState } from 'react';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import CreateUser from './pages/CreateUser/CreateUser';
import CreatePost from './pages/CreatePost/CreatePost';
import { Route, Routes } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'



function App() {
  const [user,setUser] = useState(null)
 
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
     </Routes> 
    </div>
  );
}

export default App;
