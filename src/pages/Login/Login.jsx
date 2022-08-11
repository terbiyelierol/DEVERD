import React from 'react'
import '../Login/Login'
import NavBar from '../../components/NavBar/NavBar'
import UserLogin from '../../components/UserLogin/UserLogin'

export default function Login(props){
  return(
    <div>
      <NavBar/>
      <UserLogin user={props.user} userLog={props.userLog}/>
    </div>
  )
}