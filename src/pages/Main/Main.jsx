import React from "react";
import '../Main/Main.css'
import UserNavBar from "../../components/UserNavBar/UserNavBar";

export default function Main (props){
  return(
    <div className="Main">
      <UserNavBar user = {props.user} handleLogOut={props.handleLogOut}/>
    </div>
  )
}

