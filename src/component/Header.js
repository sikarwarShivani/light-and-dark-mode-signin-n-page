import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? 'header dark-mode' : 'header light-mode'}>
      <nav>
        <Link to="/signin">Sign In</Link>
        <Link to="/login">Login</Link>
      </nav>
      <div>
        <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
        <button onClick={toggleTheme}>
          Switch to {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default Header;
