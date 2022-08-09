import './App.css';
import React, { useState } from 'react';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import { Route, Routes, Redirect } from 'react-router-dom';
import CreateUser from './pages/CreateUser/CreateUser';



function App() {
  const [user,setUser] = useState(null)

  const userLog = (incomingUser) =>{
    setUser(incomingUser)
  }

  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Landing user={user}/>}/>
        <Route path='/login' element={<Login user={userLog}/>}/>
        <Route path='/createuser' element={<CreateUser user={userLog}/>}/>
     </Routes> 
    </div>
  );
}

export default App;
