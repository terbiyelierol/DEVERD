import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MessageBox({conversation,userId,friendName}){
  const friendId = conversation.users.find((u)=>u._id !== userId._id)
  return(
    <div className="MessageBox col-6 mt-5">
    <div className="card text-center">
        <div className="card-header">
         <Link to={`/messages/${conversation._id}`}><h1 className="card-title">{friendId.username}</h1></Link> 
        </div>
    </div>
  </div>
  )
}

// onClick={()=>{friendName(friendId.username)}}