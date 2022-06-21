import React from 'react';
import ReactDOM from 'react-dom/client';
import './index';
import App from './components/App';
import Nav from './components/Nav';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Nav/>
    <App />
{/* <h2>Hello  this is the demo for gbwheels</h2> */}




  </React.StrictMode>
);
