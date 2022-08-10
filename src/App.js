import './App.css';
import React, { useState } from 'react';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import { Route, Routes } from 'react-router-dom';
import CreateUser from './pages/CreateUser/CreateUser';



function App() {
  const [user,setUser] = useState(null)
  console.log(user)
  const userLog = (incomingUser) =>{
    setUser(incomingUser)
  }
  
  
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login user={user} userLog={userLog}/>}/>
        <Route path='/createuser' element={<CreateUser userLog={userLog}/>}/>
        <Route path='/main' element={<Main userLog={userLog}/>}/>
     </Routes> 
    </div>
  );
}

export default App;
