import { useState } from "react";
import React from "react";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    } else {    
      alert('Submitted form');
    }
    console.log(email);
    console.log(password);
  };

  return (
    <div className="main">
      <form className="box" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="text-label">
          <label>Email</label>
          <input 
            placeholder="Email" 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="text-label">
          <label>Password</label>
          <input 
            placeholder="Password" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <div className="text-label">
          <label>Confirm Password</label>
          <input 
            placeholder="Confirm Password" 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
