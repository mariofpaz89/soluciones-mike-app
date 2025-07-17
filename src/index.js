import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Importa tu componente principal App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Aquí es donde se renderiza tu aplicación una única vez */}
  </React.StrictMode>
);  
