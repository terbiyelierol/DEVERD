import React from "react";
import '../NewUser/NewUser.css'
import { useState } from "react";

export default function NewUser(props){
  const [newUser,setNewuser] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  })

  const handleSign = async (e) => {
    e.preventDefault();
  }
  
  

  return(
    <form className="mt-5 d-flex flex-column align-items-center" onSubmit={this.handleSubmit} >
        <div class="mb-3 col-2">
          <label for="username" class="form-label">User Name</label>
          <input onChange={(e) =>
             setNewuser({
               ...newUser,
               username: e.target.value,
             })} name="username" type="text" class="form-control" value={newUser.username} id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3 col-2">
          <label for="email" class="form-label">Email address</label>
          <input onChange={(e) =>
             setNewuser({
               ...newUser,
               email: e.target.value,
             })} name="email" type="email" class="form-control" value={newUser.email} id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3 col-2">
          <label for="password" class="form-label">Password</label>
          <input onChange={(e) =>
             setNewuser({
               ...newUser,
               password: e.target.value,
             })} name="password" type="password" class="form-control" value={newUser.password} id="exampleInputPassword1"/>
        </div>
        <div class="mb-3 col-2">
          <label for="password" class="form-label">Confirm Password</label>
          <input onChange={(e) =>
             setNewuser({
               ...newUser,
               confirm: e.target.value,
             })} name="confirm" type="password" class="form-control"  value={newUser.confirm} id="exampleInputPassword1"/>
        </div>
        <button onClick={handleSign} type="submit" class="btn btn-primary col-2">Create</button>
    </form>
  )
}