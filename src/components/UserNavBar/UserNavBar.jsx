import React from "react";
import '../UserNavBar/UserNavBar.css'
import Logo from '../Logo/Logo'
import { Link } from "react-router-dom";

export default function UserNavBar(props){
  return(
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid ">
          <Link to="/main">
            <Logo/>
          </Link>
          <form class="d-flex" role="search">
            <input class="form-control me-2 col-4" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-primary" type="submit">Search</button>
          </form>
          <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown"> 
              <ul className="navbar-nav navFlex">
                <li className="nav-item">
                  <Link to='/'><button className="btn btn-light" onClick={props.handleLogOut}>Logout</button></Link>
                </li>
                <li className="nav-item">
                  <Link to='/createpost'><button className="btn btn-outline-primary">Create Post</button></Link>
                </li>
                <li className="nav-item">
                  <Link to={`/${props.user.username}`}><button className="btn btn-outline-primary">DashBoard</button></Link>
                </li>
                <li className="nav-item">
                  <Link to={`/${props.user.username}`}><button className="btn btn-outline-primary">Messages</button></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  )
}