import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProviderLayer from './ProviderLayer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // importing our router componenet to add to our application

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProviderLayer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
