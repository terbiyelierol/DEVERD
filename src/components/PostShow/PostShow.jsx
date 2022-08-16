import React from "react";
import '../PostShow/PostShow.css'

export default function PostShow(props){
  console.log(props.singlePosts)
  return(
    <>
      <h1>{props.singlePosts.body}</h1>
    </>
  )
}