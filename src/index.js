import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import variables from './styles/variables';

ReactDOM.render(
  <ThemeProvider theme={variables}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
