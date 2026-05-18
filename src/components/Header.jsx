import React from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from localStorage or context
    localStorage.removeItem('user');
    // Navigate to login page
    navigate('/login');
  };

  return(
   
       <div id="mainApp" className="container">
        <header>
            <div className="header-content">
                <div className="header-left">
                    <h1> Weekly Meal Planner</h1>
                    <p>Plan your meals for the week ahead</p>
                </div>
                <div className="header-right">
                    <div className="user-info">
                        <span id="userGreeting">Hello, foodie!</span>
                        <button id="logoutBtn" className="btn btn-small" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
      </div>
   
  );
}
export default Header;