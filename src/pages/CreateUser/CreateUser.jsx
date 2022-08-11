import React from "react";
import '../CreateUser/CreateUser.css'
import NavBar from "../../components/NavBar/NavBar";
import NewUser from "../../components/NewUser/NewUser";

export default function CreateUser(props){
 
  return(
    <div className="CreateUser">
      <NavBar user = {props.user}/>
      <NewUser userLog={props.userLog}/>
    </div>
  )
}