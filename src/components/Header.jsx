import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="nav-bar">
      <h1 className="logo">My Store</h1>

      <ul className="nav-list">
        <li className="nav-item">Products</li>
        <li className="nav-item">Login</li>
        <li className="nav-item signup-btn">Signup</li>
      </ul>
    </header>
  );
}

export default Header;
