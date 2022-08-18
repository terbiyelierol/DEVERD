import React from "react";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import BookMarkPostCard from "../../components/BookMarkPostCard/BookMarkPostCard"

export default function BookMarkPage(props){
  return(
    <div>
      <UserNavBar user = {props.user}/>
      <BookMarkPostCard/>
    </div>
  )
}