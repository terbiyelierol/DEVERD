import React from "react";
import '../PostCard/PostCard.css'

export default function PostCard (props){
  return(
    <div className="PostCard col-6 mt-5">
      <div className="card text-center">
          <div className="card-header">
            Featured
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
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