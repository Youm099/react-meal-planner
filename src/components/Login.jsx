
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import supabase from '../supabaseClient.js';

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
     if (error) {
      setError(error.message);
      return;
    }

    navigate('/dashboard');
  };

  return(
    <div className="big-container">
      <div className="form-container">

        <p className="title">
          Logging In?<br/>Welcome back!
        </p>

        <form onSubmit={handleLogin}>

          <div className="mb-3">
            <label>Email:</label>

            <input
              type="email"
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password:</label>

            <input
              type="password"
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
           {error && <p className="pol">{error}</p>}

          <button className="btn btn-success" type="submit">
            Login
          </button>

          <p className="pol">
            You are agreeing to our terms and policies
          </p>

          <Link to="/signup" className="btn btn-default border">
            Register
          </Link>

        </form>
      </div>
    </div>
  )
}
export default Login;