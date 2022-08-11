import React from "react";
import '../CreatePost/CreatePost.css'
import NewPost from "../../components/NewPost/NewPost";


export default function CreatePost(props){
  return(
    <NewPost user={props.user} userLog={props.userLog}/>
  )
 
}