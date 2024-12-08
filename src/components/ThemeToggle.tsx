import React, { useState, useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isToggling, setIsToggling] = useState(false);

  const handleThemeToggle = () => {
    setIsToggling(true);
    setTimeout(() => {
      setTheme(theme === 'light' ? 'dark' : 'light');
      setIsToggling(false);
    }, 300); 
  };

  return (
    <button
      onClick={handleThemeToggle}
      className={`${className} ${isToggling ? 'opacity-50 cursor-wait' : ''}
        p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600
        transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500`}
    >
      {theme === 'light' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.001 9.001 0 0012 21a9.001 9.001 0 008.354-5.646z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
```