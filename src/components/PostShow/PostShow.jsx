import React from "react";
import '../PostShow/PostShow.css'



export default function PostShow(props){
  return(
    <>
      <h1>{props.singlePosts.title}</h1>
      <h1>{props.singlePosts.body}</h1>
      <h1>CreatedBy</h1>
      <h3>{props.username}</h3>
      <div className="d-flex flex-column align-items-center col-2">
         <button onClick={()=>{props.createRoom(props.user._id,props.createdById)}} className="btn btn-dark text-light">Message to Publisher</button>
      </div>
    </>
  )
}