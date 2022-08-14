import React from "react";
import '../PostPage/PostPage.css'
import PostShow from "../../components/PostShow/PostShow";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";





export default function PostPage (props){

  let [singlePosts, setSinglePosts] = useState([])
  const param = useParams()

  async function getSinglePosts() {
      let fetchResponse = await fetch(`/api/posts/${param.username}/${param.id}`,{
        method: 'GET',
        headers: { 
          "Content-Type": "string",
          body:param.id },
      })
      let response =  await fetchResponse.json()
      setSinglePosts(response)
  }
  console.log(singlePosts)
  useEffect(() => {
    getSinglePosts()
  }, [])

  return(
    <>
      <UserNavBar user = {props.user}/>
      <PostShow singlePosts={singlePosts}/>
    </>
  )
}