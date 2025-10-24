import React, { useContext } from 'react';
import Button from './Button';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">PLP Task Manager</h1>
      <div className="flex items-center gap-2">
        <Button variant="primary" size="sm">Home</Button>
        <Button variant="secondary" size="sm" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
