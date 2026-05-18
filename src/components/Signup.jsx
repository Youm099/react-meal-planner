
import { Link } from 'react-router-dom';
import React from 'react';

function Signup() {
  return (
    <div className="Big-container">
      <div className="Form-container">
        <p className="title">Signing Up?<br/>Say bye bye to chaotic guessing!</p>
    <form id="signupForm" >
                    <div className="mb-3">
                        <label htmlFor="signupName">Full Name</label>
                        <input type="text" id="signupName" placeholder="Enter your name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="signupEmail">Email</label>
                        <input type="email" id="signupEmail" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="signupPassword">Password</label>
                        <input type="password" id="signupPassword" placeholder="Create a password " required minLength="6" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="signupConfirm"></label>
                        <input type="password" id="signupConfirm" placeholder="Confirm your password" required />
                    </div>
                    <button type="submit" className="btn btn-primary btn-full">Create Account</button>
                    <Link to="/login" className= "btn-default border btn-full" type="submit">Already have an account? Login</Link>
                   
                </form>
        </div>
    </div>
  )
}
export default Signup;