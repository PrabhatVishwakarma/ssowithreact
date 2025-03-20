import React, { useState } from "react";

import { useNavigate } from "react-router-dom";  
import video from "../Assets/formBackgroundVIdeo.mp4";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [ssn, setSsn] = useState(""); 
  const [phone, setPhone] = useState(""); 
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    ssn: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();  // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username || !email || !password || !ssn || !phone) {
      setErrors((prev) => ({ ...prev, username: !username ? "Username is required." : "", email: !email ? "Email is required." : "", password: !password ? "Password is required." : "", ssn: !ssn ? "SSN is required." : "", phone: !phone ? "Phone number is required." : "" }));
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, ssn, phone }), // Include new fields
      });
      
      const data = await response.json();
      if (data.success) {
        alert("Registration successful!");
        setUsername("");
        setEmail("");
        setPassword("");
        setSsn("");
        setPhone("");
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
      <form onSubmit={handleSubmit} className="login-form register-form">
        <h2 className="login-title">AI Chatbot Registration</h2>
        <div className="background-video-container">
          <video autoPlay muted loop className="background-video">
            <source src={video} type="video/mp4" />
          </video>
        </div>
        
        <label htmlFor="username" className="login-label">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required className="login-input" />
        
        <label htmlFor="password" className="login-label">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="login-input" />
        
        {errors.username && <p className="login-error">{errors.username}</p>}
        {errors.password && <p className="login-error">{errors.password}</p>}
        {errors.ssn && <p className="login-error">{errors.ssn}</p>}
        {errors.phone && <p className="login-error">{errors.phone}</p>}
        {errors.email && <p className="login-error">{errors.email}</p>}

        <label htmlFor="ssn" className="login-label">SSN:</label>
        <input type="text" id="ssn" value={ssn} onChange={(e) => setSsn(e.target.value)} required className="login-input" />
        
        <label htmlFor="phone" className="login-label">Phone Number:</label>
        <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className="login-input" />
        
        <label htmlFor="email" className="login-label">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="login-input" />
        
        <div className="button-container" style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
          <button type="submit" className="login-button">Register</button>
          <button type="button" className="login-button" onClick={() => navigate("/login")}>Back to Login</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
