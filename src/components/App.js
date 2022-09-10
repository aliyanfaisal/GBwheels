
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
import SellA from './assets/Subpages/SellA';
import Sellcar from './assets/Subpages/Sellcar';
import Usedbike from './assets/Subpages/Bikes/Usedbike';
import Usedcar from './assets/Subpages/Cars/Usedcar';
import Newcar from './assets/Subpages/Cars/Newcar';
import Terms from './assets/Subpages/Terms and conditions/Terms';


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
        <Route exact path="/SellA" component={SellA} />
        <Route exact path="/Sellcar" component={Sellcar} />
        <Route exact path="/Newcars" component={Newcar} />
        <Route exact path="/Usedcars" component={Usedcar} />
        <Route exact path="/Bikes" component={Usedbike} />
        <Route exact path="/Terms" component={Terms} />


      </Switch>



      <div >


      </div>

      





    </div>

  );
}

export default App;
