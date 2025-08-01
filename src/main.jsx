import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename="/Portfolio">  {/* 👈 Add basename here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
