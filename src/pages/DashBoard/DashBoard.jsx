import React from "react";
import '../DashBoard/DashBoard.css'
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import UserPostCard from "../../components/UserPostCard/UserPostCard";
import { useState,useEffect } from "react";




export default function DashBoard(props){
  let [userPosts, setUserPosts] = useState([])
  let userToken = localStorage.getItem('token')



  async function getUserPosts() {

      let fetchResponse = await fetch("/api/posts/:username",{
        method: 'GET',
        headers: { 
          // "Content-Type": "application/json",
          'Authorization':'Bearer '+ userToken },
      }
      )
      let response =  await fetchResponse.json()
      setUserPosts(response)
  }

    
  const deletePost=(postId)=>{
    console.log(postId)
    console.log(userPosts)
  }

  console.log(deletePost())
  
  useEffect(() => {
    getUserPosts()
  }, [])

  return(
    <div className="DashBoard">
      <UserNavBar user = {props.user}/>
      {userPosts.map(userPost=><UserPostCard deletePost={deletePost} data={userPost} user={props.user}/>)}
    </div>
  )
}