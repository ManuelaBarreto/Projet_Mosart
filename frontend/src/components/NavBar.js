import React from 'react';
import './NavBar.css';
import {Link} from "react-router-dom";

export default function NavBar() {
  return (
    <header className="nav-bar">
      <Link className="nav-link kaushan-script-regular" to='/'>Mos'Art</Link>
    </header>
  );
}
