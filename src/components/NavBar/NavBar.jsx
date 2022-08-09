import React from "react";
import Logo from '../Logo/Logo'
import '../NavBar/NavBar.css'
import {Link} from 'react-router-dom'


export default function NavBar(props){
  return(
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid ">
        <Logo/>
          <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown">           
              <ul className="navbar-nav navFlex">
                <li className="nav-item">
                  <a className="btn btn-light" href="/login" type="button">Login</a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-outline-primary" href="/createuser" type="button">Create Account</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  )
  
}