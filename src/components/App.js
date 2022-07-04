
import './App.css';
import Nav from '../components/Nav'
import Collage from '../components/assets/gallery';
import  Service from './assets/service';
import React from 'react';
import { Helmet } from 'react-helmet';



function App() {
 
  return (
    <div>
   <Helmet>
                <meta charSet="utf-8" />
                <title>GBwheels</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Your car our service" />
            </Helmet>
            <Nav/>
    <div className="app">
<h1>Welcome to  GBwheels</h1>

<button id='mainb'>Learn More</button>
        
      </div>
      
    <Service/>
    <Collage/>


      
    </div>
    
  );
}

export default App;
