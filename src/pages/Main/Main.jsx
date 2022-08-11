import React from "react";
import '../Main/Main.css'
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import CardTable from "../../components/CardTable/CardTable";
import { useState,useEffect } from "react";


console.log('erol')

export default function Main (props){

  let [posts, setPosts] = useState([])

  async function getAllPosts() {
    // try {
      let fetchResponse = await fetch("/api/posts")
      let response = await fetchResponse.json()
      console.log(response)
      setPosts(response)
  //   } catch(err) {
  //     console.log("couldn't fetch posts")
  //   }
  }

  useEffect(() => {
    getAllPosts()
  }, [])

  return(
    <div className="Main">
      <UserNavBar user = {props.user} handleLogOut={props.handleLogOut}/>
      <CardTable />
    </div>
  )
}

