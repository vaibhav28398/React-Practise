import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import State from './state_eg.js'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <State />
  </React.StrictMode>,
  document.getElementById('state')
);

