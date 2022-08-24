import React from "react";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import Conversation from "../../components/Conversation/Conversation";
import { useState,useEffect } from "react";


export default function ConversationPage(props){


  
  return(
    <>
    <UserNavBar user={props.user}/>
    <Conversation cross={props.cross} converId={props.converId} userId={props.user} friend={props.friend}/>
    </>
  )
}