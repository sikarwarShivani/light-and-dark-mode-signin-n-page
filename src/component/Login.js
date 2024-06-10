import { useState } from "react";
import React  from "react";
import "./SignIn.css";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
 
  return (
    <div className="main">
      
      <form className="box" >
      <h1>Log In</h1>
        <div className="text-label" >
          <label>Email</label>
          <input placeholder="Email" type="email" 
            value={email} onChange={(e) => setEmail(e.target.value)}  />
        </div>
        <div className="text-label">
          <label>Password</label>
          <input placeholder="Password" type="password" 
            value={password} onChange={(e) => setPassword(e.target.value)} />
             </div>
        <button >submit</button>
      </form>
      
    </div>
  );
};

export default Login;
