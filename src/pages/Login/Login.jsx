import React from 'react'
import '../Login/Login'
import NavBar from '../../components/NavBar/NavBar'
import User_Login from '../../components/User_Login/User_Login'

export default function Login(props){
  return(
    <div>
      <NavBar/>
      <User_Login/>
    </div>
  )
}