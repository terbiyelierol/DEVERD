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
    <div className="DashBoard ">
      <UserNavBar user = {props.user}/>
        <main className="d-flex flex-row justify-content-center align-items-center">
          <div className="col-7">
            {userPosts.map((userPost,i)=><UserPostCard key={i} getSinglePosts={props.getSinglePosts} data={userPost} userPosts={userPosts} user={props.user} getAllPost={getUserPosts}/>)}
          </div>
          <div className="col-5">
            <button className="btn btn-dark text-light">Like Posts</button>
            <br/>
            <button className="btn btn-dark text-light mt-5">BookMarks</button>
          </div>
        </main>
    </div>
  )
}