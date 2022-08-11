import React from "react";
import '../CardTable/CardTable.css'
import PostCard from '../PostCard/PostCard';

export default function CardTable(props){
  return(
    <div className="CardTable">
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </div>
  )
  
}