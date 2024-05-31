import React from 'react';
import '../App.css';

const ToggleSwitcher = ({ theme, toggleTheme }) => {
  return (
    <label className="switch">
      <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSwitcher;
