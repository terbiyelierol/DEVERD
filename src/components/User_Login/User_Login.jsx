import React from "react";
import '../User_Login/User_Login.css'

export default function User_Login(props){
  return(
    <div className="User_Login">
      <form className="mt-5 d-flex flex-column align-items-center">
        <div class="mb-3 col-2">
          <label for="username" class="form-label">User Name</label>
          <input name="username" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3 col-2">
          <label for="password" class="form-label">Password</label>
          <input name="password" type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" class="btn btn-primary col-2">Create</button>
    </form>
    </div>
  )
}