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
      console.log(fetchResponse)
      let response =  await fetchResponse.json()
      console.log(response)
      setUserPosts(response)
  }

//   async function deleteUserPosts() {
//     let fetchResponse = await fetch("api/posts/:username/:postId")
//     let response =  await fetchResponse.json()
//     console.log(response)
//     setUserPosts(response)
// }

  useEffect(() => {
    getUserPosts()
  }, [])

  return(
    <div className="DashBoard">
      <UserNavBar user = {props.user}/>
      {userPosts.map(userPost=><UserPostCard data={userPost} user={props.user}/>)}
    </div>
  )
}