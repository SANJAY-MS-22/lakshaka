import React, { useState, useEffect } from 'react';
import ToggleSwitcher from './ToggleSwitcher';
import '../App.css';

function ToggleSwitch() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h1>
        <ToggleSwitcher theme={theme} toggleTheme={toggleTheme} />
      </header>
    </div>
  );
}

export default ToggleSwitch;
