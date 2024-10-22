import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation

const Header = ({ title }) => {
  return (
    <header>
      <nav>
        <h1>{title}</h1>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Link to Home route */}
          </li>
          <li>
            <Link to="/albums">Albums</Link> {/* Link to Albums route */}
          </li>
          <li>
            <Link to="/about-me">About Me</Link> {/* Link to About Me route */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
