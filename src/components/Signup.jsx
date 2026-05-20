
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import supabase from '../supabaseClient.js';

function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
        setError('Passwords do not match');
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) {
      setError(error.message);
      return;
    }
    navigate('/dashboard');
  };

  return (
    <div className="Big-container">
      <div className="Form-container">

        <p className="title">
          Signing Up?<br/>
          Say bye bye to chaotic guessing!
        </p>

        <form onSubmit={handleSignup}>

          <div className="mb-3">
            <label htmlFor="signupName">Full Name</label>

            <input 
                type="text"
              id="signupName"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="signupEmail">Email</label>

            <input
              type="email"
              id="signupEmail"
              placeholder="Enter your email"
              value={email}
                onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="signupPassword">Password</label>

            <input
              type="password"
              id="signupPassword"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signupConfirm">
              Confirm Password
            </label>

            <input
              type="password"
              id="signupConfirm"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
             {error && <p className="pol">{error}</p>}

          <button type="submit" className="btn btn-primary btn-full">
            Create Account
          </button>

          <Link to="/login" className="btn-default border btn-full">
            Already have an account? Login
          </Link>

        </form>
      </div>
    </div>
  )
}

export default Signup;