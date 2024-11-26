import React from 'react';
import { useDispatch } from 'react-redux';
import { setDarkMode, setLightMode } from '../redux/themeSlice'; 

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(setDarkMode());  
  };

  return (
    <button onClick={handleThemeChange}>
      Toggle Dark Mode
    </button>
  );
};

export default ThemeToggle;
