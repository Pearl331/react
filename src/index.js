import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Create a root element and render the App component inside it
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component with StrictMode enabled for development checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
