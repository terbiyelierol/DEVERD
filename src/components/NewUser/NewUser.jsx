import React from "react";
import '../NewUser/NewUser.css'
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

export default function NewUser(props){
  const [newUser,setNewuser] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  })
  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // 1. POST our new user info to the server
      const fetchResponse = await fetch('/api/users/createuser', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username: newUser.username, email: newUser.email, password: newUser.password,})
      })
      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')   
      
      // 3. decode the response into JS object
      let token = await fetchResponse.json()
      localStorage.setItem('token', token) // 4. stick the serv resp into the user's browser

      const userDoc = JSON.parse(atob(token.split('.')[1])).user; // 5. Decode the token + put user document into state
      console.log(userDoc)
      props.userLog(userDoc)
      navigate('../login')

    } catch (err) {
      console.log("SignupForm error", err)
      setNewuser({ error: 'Sign Up Failed - Try Again' });
    }
  }

  
  const disable = newUser.password !== newUser.confirm;
  return(    
    <form className="mt-5 d-flex flex-column align-items-center" onSubmit={handleSubmit}>
        <div className="mb-3 col-2">
          <label for="username" className="form-label">User Name</label>
          <input onChange={(e) =>
             setNewuser({
               ...newUser,
               username: e.target.value,
             })} name="username" type="text" className="form-control" value={newUser.username} id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 col-2">
          <label for="email" className="form-label">Email address</label>
          <input onChange={(e) =>
             setNewuser({
               ...newUser,
               email: e.target.value,
             })} name="email" type="email" className="form-control" value={newUser.email} id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 col-2">
          <label for="password" className="form-label">Password</label>
          <input onChange={(e) =>
             setNewuser({
               ...newUser,
               password: e.target.value,
             })} name="password" type="password" className="form-control" value={newUser.password} id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 col-2">
          <label for="password" className="form-label">Confirm Password</label>
          <input onChange={(e) =>
             setNewuser({
               ...newUser,
               confirm: e.target.value,
             })} name="confirm" type="password" className="form-control"  value={newUser.confirm} id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary col-2" disabled={disable}>Create</button>
    </form>
  )
}