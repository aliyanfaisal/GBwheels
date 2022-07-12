
import './App.css';
import Nav from '../components/Nav'
import Collage from '../components/assets/gallery';

import  Service from './assets/service';
import React from 'react';
import Footer from './assets/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './assets/form';
// import { Container} from 'react-bootstrap';

// import { Row } from 'react-bootstrap';
// import { Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
// import { Bounce } from 'react-animated-css';

function App() {
 
 
  return (

  
    <div id='home'>
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
    <Form/>
    <Footer/>
    </div>
      
 
);
}

export default App;
