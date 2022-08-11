import React from "react";
import '../UserPostCard/UserPostCard'

export default function UserPostCard(props){
  return(
    <div className="UserPostCard col-6 mt-5">
      <div className="card text-center">
          <div className="card-header">
          <h1 className="card-title">Something</h1>
          </div>
          <div className="card-body">
            <p className="card-text">Something</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
          <div className="card-footer d-flex flex-row justify-content-center text-muted gap-2">
            <div className="d-flex flex-column align-items-center col-2">
              <button type="submit" className="btn btn-dark text-light">Delete</button>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center col-2">
              <button type="submit" className="btn btn-dark text-light">Edit</button>
            </div>
          </div>
      </div>
    </div>
  )
}