import React from "react";
import '../DashBoard/DashBoard.css'
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import UserPostCard from "../../components/UserPostCard/UserPostCard";
import { useState,useEffect } from "react";
import {useParams} from 'react-router-dom'




export default function DashBoard(props){
  let [userPosts, setUserPosts] = useState([])
  let userToken = localStorage.getItem('token')
  const param = useParams()



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

    
  useEffect(() => {
    getUserPosts()
  }, [])

  return(
    <div className="DashBoard">
      <UserNavBar user = {props.user}/>
      {userPosts.map((userPost,i)=><UserPostCard key={i} data={userPost} userPosts={userPosts} user={props.user}/>)}
    </div>
  )
}