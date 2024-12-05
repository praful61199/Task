import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Optional styling for the header

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <h1>Template Builder</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/templates">Template Library</Link>
          </li>
          <li>
            <Link to="/create">Create Template</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
