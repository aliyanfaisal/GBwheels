import React from 'react';
import ReactDOM from 'react-dom/client';
import './index';
// import Props from './practice react/Props'


import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import Home from './components/assets/Home';

// import reportWebVitals from './reportWebVitals';



// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    
    {/* <Props/> */}
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
