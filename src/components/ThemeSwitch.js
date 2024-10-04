import React from 'react';
import './ThemeSwitch.css';

const ThemeSwitch = ({ theme, toggleTheme }) => {
  const handleChange = (e) => {
    if (e.target.id === 'on') {
      toggleTheme('dark');
    } else {
      toggleTheme('light');
    }
  };

  return (
    <form>
      <div className="switch">
        <input
          type="radio"
          id="on"
          name="theme"
          checked={theme === 'dark'}
          onChange={handleChange}
        />
        <label htmlFor="on">Dark</label>

        <input
          type="radio"
          id="off"
          name="theme"
          checked={theme === 'light'}
          onChange={handleChange}
        />
        <label htmlFor="off">Light</label>

        <div className="toggle-outside">
          <div className="toggle-inside"></div>
        </div>
      </div>
    </form>
  );
};

export default ThemeSwitch;
