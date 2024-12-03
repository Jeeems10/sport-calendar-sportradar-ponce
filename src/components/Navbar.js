import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Calendar</Link>
        </li>
        <li>
          <Link to="/add-event">Add Event</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
