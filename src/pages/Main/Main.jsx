import React from "react";
import '../Main/Main.css'
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import CardTable from "../../components/CardTable/CardTable";
import { useState,useEffect } from "react";



console.log('erol')

export default function Main (props){

  let [posts, setPosts] = useState([])
  console.log('post',posts)
  console.log("Working ")
  async function getAllPosts() {
    
      let fetchResponse = await fetch("api/posts/main")
      let response =  await fetchResponse.json()
      console.log(response)
      setPosts(response)
      console.log(posts)
  }


  useEffect(() => {
    getAllPosts()
  }, [])

  return(
    <div className="Main">
      <UserNavBar user = {props.user} handleLogOut={props.handleLogOut}/>
      {posts.map((post,i)=>{
        return <CardTable key={i} post={post}/>
      })}
    </div>
  )
}

