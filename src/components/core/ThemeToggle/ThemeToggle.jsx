import { memo } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = memo(() => {
  const { theme, toggleTheme } = useTheme();

  const getThemeIcon = () => {
    switch(theme) {
      case 'light':
        return 'bi-sun-fill';
      case 'dark':
        return 'bi-moon-stars-fill';
      case 'anime':
        return 'bi-stars';
      default:
        return 'bi-sun-fill';
    }
  };

  const getNextTheme = () => {
    switch(theme) {
      case 'light':
        return 'dark';
      case 'dark':
        return 'anime';
      case 'anime':
        return 'light';
      default:
        return 'light';
    }
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${getNextTheme()} mode`}
      title={`Current: ${theme} | Next: ${getNextTheme()}`}
    >
      <i className={getThemeIcon()}></i>
    </button>
  );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
