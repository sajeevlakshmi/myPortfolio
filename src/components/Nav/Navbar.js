import React from 'react'
 import logo from "./logo1.jpg"
 import {Link} from 'react-router-dom';
import "./Navbar.css"
//REACT-FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
const Navbar = () =>{
    return (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="logo" src={logo}  alt="logo.."/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to ="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Me</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/skills">Skills</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/experience">Experience</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/project">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Me </Link>
        </li>
       
         </ul>
    </div>
  </div>

</div>
</nav>
    )
}

export default Navbar
