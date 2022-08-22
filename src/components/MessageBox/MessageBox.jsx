import axios from "axios";
import { PromiseProvider } from "mongoose";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MessageBox({conversation,userId,friend}){
  const friendId = conversation.users.find((u)=>u._id !== userId._id)
  console.log(conversation._id)
  return(
    <div className="MessageBox col-6 mt-5">
    <div className="card text-center">
        <div className="card-header">
         <Link to={`/conversations/${userId._id}/${conversation._id}`}><h1 onClick={()=>{friend(conversation._id)}} className="card-title">{friendId.username}</h1></Link> 
        </div>
    </div>
  </div>
  )
}

