import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import video from "../Assets/formBackgroundVIdeo.mp4";
import "../AiChatBotLoginPage/AiChatBotLoginPage.css";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();  // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username || !email || !password) {
      setErrors({ message: "All fields are required." });
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      
      const data = await response.json();
      if (data.success) {
        alert("Registration successful!");
        setUsername("");
        setEmail("");
        setPassword("");
        setErrors({});
        
        // Navigate to the login page after successful registration
        navigate("/login");
      } else {
        setErrors({ message: data.message });
      }
    } catch (error) {
      setErrors({ message: "An error occurred. Please try again." });
    }
  };

  return (
    <div className="login-file-validator" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} className="login-form" style={{ padding: '60px', maxWidth: '500px' }}>
        <h2 className="login-title">AI Chatbot Registration</h2>
        <div className="background-video-container">
          <video autoPlay muted loop className="background-video">
            <source src={video} type="video/mp4" />
          </video>
        </div>
        
        <label htmlFor="username" className="login-label">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required className="login-input" />
        
        <label htmlFor="email" className="login-label">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="login-input" />
        
        <label htmlFor="password" className="login-label">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="login-input" />
        
        {errors.message && <p className="login-error">{errors.message}</p>}
        
        <div className="button-container" style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
          <button type="submit" className="login-button">Register</button>
          <button type="button" className="login-button" onClick={() => navigate("/login")}>Back to Login</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
