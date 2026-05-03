import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="nav-bar">
      <h1 className="logo">My Store</h1>

      <ul className="nav-list">
        <li className="nav-item"><NavLink to="/products">Products</NavLink></li>
        <li className="nav-item"><NavLink to="/login">Login</NavLink></li>
        <li className="nav-item signup-btn"><NavLink to="/signup">Signup</NavLink></li>
      </ul>
    </header>
  );
}

export default Header;
