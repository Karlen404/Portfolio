import React, { useState, useEffect } from 'react';
import { BsMoonStars, BsSun } from "react-icons/bs";

const SwitchMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    updateStyles();
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const updateStyles = () => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  };
  return (
    <div className="dark-mode-switch">
      <input
        type="checkbox"
        id="darkModeSwitch"
        className="hidden"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <label htmlFor="darkModeSwitch" className="switch-label">
        <div className={`switch-icon ${darkMode ? 'moon' : 'sun'}`}>
          {darkMode ? <div className='p-2 bg-bgLight text-bgDark text-xl rounded-full cursor-pointer hover:ring-1 ring-bgLight hover:text-bgLight hover:bg-inherit transition duration-300'>
            <BsMoonStars />
          </div>
          :
          <div className='p-2 bg-primary text-bgLight text-xl rounded-full cursor-pointer hover:ring-1 ring-primary hover:text-primary hover:bg-inherit transition duration-300'>
            <BsSun />
          </div>}
        </div>
      </label>
    </div>
  );
};

export default SwitchMode;
