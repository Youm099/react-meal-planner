import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Dashboard from "./components/Dashboard.jsx";

import "./App.css";

function App() {
  return (
    <Router>

      <div className="app-layout">

        <main className="main-content">

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>

        </main>

      </div>

    </Router>
  );
}

export default App;
