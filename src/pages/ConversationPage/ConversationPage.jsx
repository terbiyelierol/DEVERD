import React from "react";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import Conversation from "../../components/Conversation/Conversation";
import { useParams } from "react-router-dom";

export default function ConversationPage(props){
  const params = useParams()
  console.log(params)
  return(
    <>
    <UserNavBar user={props.user}/>
    <Conversation converId={props.converId} userId={props.user} friend={props.friend}/>
    </>
  )
}