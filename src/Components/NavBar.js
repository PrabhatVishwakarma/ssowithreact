import React from "react";
import "../common.css"; // Importing common styles

import { useLocation } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    height: '60px', 
    display: 'flex',
    alignItems: 'center', 
    padding: '0 20px', 
  };

  const location = useLocation();
  return (
    <nav className="navbar" style={navbarStyle}>
      <div className="navbar-logo">
        <img src="https://careers.persistent.com/logo-dark_257ecddf.5ded858effe2e0f0.svg" alt="Logo" />
      </div>
      <div className="navbar-heading">
        <h1>AI Chatbot</h1>
      </div>
      <div className="navbar-SemiColons">SemiColons@2025</div>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <div className="profile-picture" style={{ marginLeft: '20px' }}>
          <img src="path_to_your_profile_picture" alt="Profile" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
