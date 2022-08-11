import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import '../UserLogin/UserLogin.css'

export default function UserLogin(props){
  const [logUser,setLoguser] = useState({
    username: '',
    password: '',
    error: ''
  })
  const navigate = useNavigate()

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // 1. POST our new user info to the server
      const fetchResponse = await fetch('/api/users/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: logUser.username, password: logUser.password, })
      })

      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')

      let token = await fetchResponse.json() // 3. decode fetch response: get jwt token from srv
      localStorage.getItem('token', token);  // 4. Stick token into localStorage
      const userDoc = JSON.parse(atob(token.split('.')[1])).user; // 5. Decode the token + put user document into state
      props.userLog(userDoc)
      navigate('../main')

    } catch (err) {
      console.log("SignupForm error", err)
      setLoguser({ error: 'Sign Up Failed - Try Again' });
    }
  }

  return(
    <div className="User_Login">
      <form className="mt-5 d-flex flex-column align-items-center" onSubmit={handleSubmit}>
        <div className="mb-3 col-2">
          <label for="username" className="form-label">User Name</label>
          <input onChange={(e) =>
             setLoguser({
               ...logUser,
               username: e.target.value,
             })} name="username" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 col-2">
          <label for="password" className="form-label">Password</label>
          <input onChange={(e) =>
             setLoguser({
               ...logUser,
               password: e.target.value,
             })} name="password" type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary col-2">Login</button>
    </form>
    </div>
  )
}