
// import './Home.css';
import Nav from './Nav';
import React  from 'react';
import "./App.css"


import Service from './assets/service';

import 'bootstrap/dist/css/bootstrap.min.css';


import Video from './assets/mission';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
// import Shop from './assets/Shop';
import Home from './assets/Home';
import About from './assets/About';
import Menu from './Nav';
import Shop from './assets/Shop';
import Mission from './assets/mission';
import Cart from './assets/Cart';


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
        <Route exact path="/" component={Home} />

        <Route path="/Shop" component={Shop} />
        <Route exact path="/mission" component={Mission} />
        <Route exact path="/Service" component={Service} />
        <Route exact path="/About" component={About} />
        <Route exact path="/cart" component={Cart} />


      </Switch>



      <div >


      </div>

      





    </div>

  );
}

export default App;
