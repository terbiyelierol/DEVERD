import React from "react";
import '../PostShow/PostShow.css'
import { useParams } from "react-router-dom";

export default function PostShow(props){
  const param = useParams()
  props.postId(param)
  console.log(param)
  return(
    <>
      <h1>{props.singlePosts.body}</h1>
    </>
  )
}