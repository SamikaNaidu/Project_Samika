import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './adminStyles.css'; // Optional: global styling

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
