import React from "react";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import Conversation from "../../components/Conversation/Conversation";

export default function ConversationPage(props){
  return(
    <>
    <UserNavBar user={props.user}/>
    <Conversation converId={props.converId} userId={props.user}/>
    </>
  )
}