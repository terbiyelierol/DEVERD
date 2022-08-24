import React from "react";
import '../Main/Main.css'
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import CardTable from "../../components/CardTable/CardTable";
import { useState,useEffect } from "react";


export default function Main (props){

  let [posts, setPosts] = useState([])
  async function getAllPosts() {
    
      let fetchResponse = await fetch("api/posts/main")
      let response =  await fetchResponse.json()
      setPosts(response)
  }


  useEffect(() => {
    getAllPosts()
  }, [])

  return(
    <div className="Main">
      <UserNavBar user = {props.user} handleLogOut={props.handleLogOut}/>
      {posts.map((post,i)=>{
        return <CardTable key={i} post={post} user = {props.user}/>
      })}
    </div>
  )
}

