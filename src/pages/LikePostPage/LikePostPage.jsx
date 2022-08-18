import React from "react";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import LikePostCard from "../../components/LikePostCard/LikePostCard";

export default function LikePostPage(props){
  return(
    <div>
      <UserNavBar user = {props.user}/>
      <LikePostCard userLikes={props.userLikes} />
      {/* {props.userLikes.map((userLike,i)=><LikePostCard key={i} data={userLike} />)} */}
    </div>
  )
}