import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GWBProvider } from './context/GWBContext';
import App from './App';

ReactDOM.render(
  <GWBProvider>
    <App />
  </GWBProvider>,
  document.getElementById('root')
);
