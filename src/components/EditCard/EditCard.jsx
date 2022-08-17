import React from "react";
import Logo from "../Logo/Logo";
import { Link,useParams } from "react-router-dom";
import { useState } from "react";

export default function EditCard (props){
  
  return(
  <div className="EditCard">
      <div className="d-flex justify-content-between">
          <Link to="/main">
            <Logo/>
          </Link>
      <Link to='/'><button className="btn btn-light" onClick={props.handleLogOut}>Logout</button></Link>
      </div> 
      <br/>
      <h1>EDIT POST</h1>
        <div className="container mt-5">
          <form className="row g-3" >
          <div className="col-md-12">
              <label for="avatar"></label>
              <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
              <br/>
              <label for="title" className="form-label"></label>
              <textarea name="title" value={props.singlePosts.title} className="form-control title-place" id="comments" rows="2"  required placeholder="New post title here"></textarea>
              <label for="body" className="form-label"></label>
              <textarea name="body" value={props.singlePosts.body} className="form-control body-place"  rows="10" cols="40" id="comments" required placeholder="New post"></textarea>
              <button type="submit" className="btn btn-dark text-light col-2 mt-2">Publish</button>
          </div>
          </form>
      </div>
    </div>
  )
}