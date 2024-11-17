import React from "react";
import { useUser } from "../../UserContext";
import {useNavigate} from 'react-router-dom';

import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();
    const {username, setUsername} = useUser();

    const handleLogout = () => {
      setUsername(null);
      localStorage.removeItem('username');
      navigate("/");
    }

    return (
        <header className="page-header">
            <h3 className="page-title">Ray's Prestige Motors</h3>
            <ul className="nav-bar">
              <li className="nav-bar-item">Welcome, {username}<button onClick={handleLogout}>Log Out</button></li>
            </ul>
          </header>
      )
}

export default Navbar;