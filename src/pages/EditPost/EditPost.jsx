import React from "react";
import EditCard from "../../components/EditCard/EditCard";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function EditPost(props){

  const param = useParams()
  
  return(
    <>
    <EditCard singlePosts={props.singlePosts} />
    </>
  )
}