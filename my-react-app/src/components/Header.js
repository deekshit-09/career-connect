import React from "react";
import {Link} from "react-router-dom"

function Header() {
  return (
    <header>
      <h1>Career Connect</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile"> profile</Link>
        
      </nav>
    </header>
  );
}

export default Header;
