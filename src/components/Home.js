
import './Home.css';
import Nav from './Nav'
import Collage from './assets/gallery';
import React    from 'react';



import Service from './assets/service';

import Footer from './assets/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import Filter from './assets/Data';

import Video from './assets/Video';
import { Helmet } from 'react-helmet';
// import Counter from '../practice react/Counter';


const Home =()=> {



 
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
<button id='mainb' >Learn More</button>


{/* <h1>Welcome to the counter</h1> */}
{/* <Counter/> */}





        </div>
<Filter/>      
     <Service/>
    <Collage/>
<Video/>
    <Footer/>
   
 






      </div>

);
}

export default Home;
