import React from "react";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import BookMarkPostCard from "../../components/BookMarkPostCard/BookMarkPostCard"

export default function BookMarkPage(props){
  return(
    <div>
      <UserNavBar user = {props.user}/>
      {props.userBookMarks.map((userBookMark,i)=><BookMarkPostCard key={i} data={userBookMark} />)}
    </div>
  )
}