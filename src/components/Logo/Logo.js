import React from "react"
import logo from '../../deverd_logo.png'
import '../Logo/Logo.css'
import {Link} from 'react-router-dom'

export default function Logo(props){
  return(
     props.user ?
    <Link to="/">
      <div className="Logo">
        <img src={logo} alt="logo" height={40}/>
      </div>
    </Link>
    :
    <Link to="/main">
    <div className="Logo">
      <img src={logo} alt="logo" height={40}/>
    </div>
    </Link>
    
  )
}