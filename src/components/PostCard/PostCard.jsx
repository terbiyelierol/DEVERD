import React from "react";
import '../PostCard/PostCard.css'
import { Link } from "react-router-dom";

export default function PostCard (props){
  return(
    <div className="PostCard col-6 mt-5">
      <div className="card text-center">
          <div className="card-header">
          <Link to={`${props.post._id}`}><h1 className="card-title">{props.post.title}</h1></Link>
          </div>
          <div className="card-body">
            <p className="card-text">{props.post.body}</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
          <div className="card-footer d-flex flex-row justify-content-center text-muted gap-2">
            <div className="d-flex flex-column align-items-center col-2">
              <button type="submit" className="btn btn-dark text-light like">Like</button>
              <small>number</small>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center col-2">
              <button type="submit" className="btn btn-dark text-light">Comment</button>
              <small>number</small>
            </div>
            <div className="d-flex flex-column align-items-center col-2">
              <button type="submit" className="btn btn-dark text-light">Comment</button>
              <small>number</small>
            </div>
          </div>
      </div>
    </div>
  )
}