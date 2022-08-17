import React from "react";
import EditCard from "../../components/EditCard/EditCard";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function EditPost(props){

  const param = useParams()
  console.log(props.singlePosts)
  
  return(
    <>
    <EditCard singlePosts={props.singlePosts} handleLogOut={props.handleLogOut} user={props.user} />
    </>
  )
}