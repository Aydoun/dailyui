import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './Router';
import { GlobalStyles } from 'utils/globals';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
