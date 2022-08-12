
// import './Home.css';
import Nav from './Nav';
import React  from 'react';
import "./App.css"


import Service from './assets/service';

import 'bootstrap/dist/css/bootstrap.min.css';


import Video from './assets/Video';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import Shop from './assets/Shop';
import Home from './assets/Home';
import About from './assets/About';
import Menu from './Nav';


const App = () => {




  return (
    <div id='home'>

      <Helmet>
        <meta charSet="utf-8" />
        <title>GBwheels</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Your car our service" />
      </Helmet>



      <Menu />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/video" component={Video} />
        <Route exact path="/Service" component={Service} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Shop" component={Shop} />


      </Switch>



      <div >



      </div>

      





    </div>

  );
}

export default App;
