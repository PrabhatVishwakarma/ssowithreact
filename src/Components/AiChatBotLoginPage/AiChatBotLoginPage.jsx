import React, { useState } from "react";
import video from '../Assets/formBackgroundVIdeo.mp4';
import "./AiChatBotLoginPage.css";
import MicrosoftLoginButton from "../MicrosoftLoginButton";
import { Link } from "react-router-dom";


const AiChatBotLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setErrors({ ...errors, username: "" });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors({ ...errors, password: "" });
  
    if (e.target.value.length === 0) {
      return;
    }
  
    if (e.target.value.length < 8) {
      setErrors({ ...errors, password: "Password must be at least 8 characters long." });
    } else if (!/[a-z]/.test(e.target.value)) {
      setErrors({ ...errors, password: "Password must contain at least one lowercase letter." });
    } else if (!/[A-Z]/.test(e.target.value)) {
      setErrors({ ...errors, password: "Password must contain at least one uppercase letter." });
    } else if (!/[0-9]/.test(e.target.value)) {
      setErrors({ ...errors, password: "Password must contain at least one digit." });
    } else if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(e.target.value)) {
      setErrors({ ...errors, password: "Password must contain at least one symbol." });
    }
  };

  return (

    
    <div className="login-file-validator">
      <form onSubmit={handleSubmit} className="login-form">
      <h2 className="login-title">AI Chatbot Login</h2>
        <div className="background-video-container">
          <video autoPlay muted loop className="background-video">
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <label htmlFor="username" className="login-label">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
          className="login-input"
        />
        {errors.username && <p className="login-error">{errors.username}</p>}

        <label htmlFor="password" className="login-label">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
          className="login-input"
        />
        {errors.password && <p className="login-error">{errors.password}</p>}
        
        <button type="submit" className="login-button">Log in</button>
      </form>
      <MicrosoftLoginButton/>
<div>
  <p className="login-link">
  Don't have an account? <Link to="/register">Register here</Link>
</p>
</div>
    </div>

  );
};

export default AiChatBotLoginPage;