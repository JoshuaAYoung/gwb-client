import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GWBProvider } from './context/GWBContext';
import App from './App';
import './global';

ReactDOM.render(
  <BrowserRouter>
    <GWBProvider>
      <App />
    </GWBProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
