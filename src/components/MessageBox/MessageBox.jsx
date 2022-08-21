import axios from "axios";
import React, { useEffect, useState } from "react";

export default function MessageBox({conversation,userId}){
  const [user,setUser] = useState(null)
  const friendId = conversation.users.find((u)=>u !== userId._id)
  console.log(friendId)
  // setUser(friendId)
  // console.log(user)

  // useEffect(()=>{
  //   const friendId = conversation.users.find((u)=>u !== userId._id)
  //   const getUser =async () =>{
  //   try{
  //     const res = await axios(`/api/conversations/${friendId}`)
  //     console.log(res)
  //   }catch(err){
  //     console.log(err)
  //   }
  // };
  // getUser()
  // },[conversation,userId])

  return(
    <div className="MessageBox col-6 mt-5">
    <div className="card text-center">
        <div className="card-header">
          <h1 className="card-title">{friendId.username}</h1>
        </div>
    </div>
  </div>
  )
}