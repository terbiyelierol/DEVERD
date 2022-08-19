import React from "react";
import '../PostShow/PostShow.css'
import { useState } from "react";



export default function PostShow(props){
  return(
    <>
      <h1>{props.singlePosts.title}</h1>
      <h1>{props.singlePosts.body}</h1>
      <h1>CreatedBy</h1>
      <h3>{props.username}</h3>
    </>
  )
}