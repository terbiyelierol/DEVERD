import React from "react";
import '../PostPage/PostPage.css'
import PostShow from "../../components/PostShow/PostShow";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";





export default function PostPage (props){

  let [singlePosts, setSinglePosts] = useState([])
  let [username,setUserName] = useState(null)
  let [createdById,setCreatedById] = useState(null)
  const param = useParams()
  const navigate = useNavigate()

 

  async function getSinglePosts() {
      let fetchResponse = await fetch(`/api/posts/${param.username}/${param.id}`,{
        method: 'GET',
        headers: { 
          "Content-Type": "string",
          body:param.id },
      })
      let response =  await fetchResponse.json()
      console.log(response.createdBy.username)
      setSinglePosts(response)
      setUserName(response.createdBy.username)
      setCreatedById(response.createdBy._id)
      
  }

  useEffect(() => {
    getSinglePosts()
  }, [])

  return(
    <>
      <UserNavBar user = {props.user}/>
      <PostShow singlePosts={singlePosts} username={username} createdById={createdById} user = {props.user} createRoom={props.createRoom}/>
    </>
  )
}