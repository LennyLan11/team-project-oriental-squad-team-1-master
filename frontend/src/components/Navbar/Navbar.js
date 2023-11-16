import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

import CinemasLogo from '../../assets/images/Logo/CinemasLogo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={CinemasLogo} alt="Logo" />
      </div>
      <div className="navbar-buttons">
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
        <Link to="/register">
          <button className="register-button">Register</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
