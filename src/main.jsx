import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import './styles/globals.css';

// Initialize AOS if available
if (typeof window !== 'undefined' && window.AOS) {
  window.AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
