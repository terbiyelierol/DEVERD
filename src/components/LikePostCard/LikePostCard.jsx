import React from "react";
import { Link } from "react-router-dom";



export default function LikePostCard(props){
  return(
    
    <div className="LikePostCard col-6 mt-5">
      <div className="card text-center">
          <div className="card-header">
         <h1 className="card-title">{props.data.title}</h1>
          </div>
          <div className="card-body">
            <p className="card-text">{props.data.body}</p>
          </div>
      </div>
    </div>
  )
}

