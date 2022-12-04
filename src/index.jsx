import React from 'react';
import ReactDOM from 'react-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import  "../node_modules/bootstrap/dist/js/bootstrap.js";

/**
 * This file can be ignored, please work in ./components/App.jsx
 */

// Include mock API.
import './mock';

// Include styles.
import './styles/index.css';

// Include application component.
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
