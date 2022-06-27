import React from 'react';
import ReactDOM from 'react-dom/client';
import './index';
import App from './components/App';
import Nav from './components/Nav';
import Service from './components/assets/First';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Nav/>
    <App />
    <Service/>


  </React.StrictMode>
);
