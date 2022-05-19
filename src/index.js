import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './d1_app'; //day 1
import App from './d2_calculator'; // day 2
// import App from './d3_hero'; // day 3
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
