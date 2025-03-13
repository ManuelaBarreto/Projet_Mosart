import React from 'react';
import './NavBar.css';
import {Link} from "react-router-dom";

export default function NavBar() {
  return (
    <header className="nav-bar">
      <Link className="nav-link" to='/'><span className="nav-text">Mos'Art</span></Link>
      <Link className="nav-link" to='/'>
          <img className="nav-icon" src={require("assets/home.png") ?? ""} alt="Home" />
      </Link>
    </header>
  );
}
