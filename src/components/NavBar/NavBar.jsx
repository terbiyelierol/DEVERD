import React from "react";
import Logo from '../Logo/Logo'
import '../NavBar/NavBar.css'
import {Link} from 'react-router-dom'

export default function NavBar(props){
  return(
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid ">
          <Link to="/">
            <Logo/>
          </Link>
          <form className="d-flex" role="search">
            <input className="form-control me-2 col-4" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
          <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown"> 
              <ul className="navbar-nav navFlex">
                <li className="nav-item">
                  <Link to='/login'><button className="btn btn-light">Login</button></Link>
                </li>
                <li className="nav-item">
                <Link to='/createuser'><button className="btn btn-outline-primary">Create Account</button></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  )
  
}