
import { Link } from 'react-router-dom';
import React from 'react';
import {useNavigate} from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
  e.preventDefault();

  navigate("/dashboard");
};
  return(
     <div className="big-container">
      <div className="form-container">
        <p className="title">Loging In?<br/>Welcome back!</p>
        <form action="" onSubmit={handleLogin}>
          <div className="mb-3" >
            <label htmlFor="loginEmail">Email:</label>
            <input type="email" id="loginEmail" placeholder='Enter your email' required/>
          </div>
          <div className="mb-3" >
            <label htmlFor="loginPassword">Password:</label>
            <input type="password" id="loginPassword" placeholder='Enter your password' required/>
          </div>
          <button className="btn btn-success" type="submit">Login</button>
          <p className="pol">You are agreeing to our terms and policies</p>
          <Link to="/signup" className="btn btn-default border" type="submit">Register</Link>
        </form>
      </div>
    </div>
    
  )
}
export default Login;