
// import './Home.css';
import Nav from './Nav';
import React from 'react';
import "./App.css"


import Service from './assets/service';

import Footer from './assets/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import Filter from './assets/Data';



import Video from './assets/Video';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import About from './pages/Shop/About';
import Gallery from './assets/gallery';
import Home from './assets/Home';

const App = () => {




  return (
    <div id='home'>

      <Helmet>
        <meta charSet="utf-8" />
        <title>GBwheels</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Your car our service" />
      </Helmet>



      <Nav />
      <div >

        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/video" component={Video} />
          <Route exact path="/Service" component={Service} />
          <Route exact path="/About" component={About} />


        </Switch>



      </div>

      





    </div>

  );
}

export default App;
