import React from "react";
import "./Home.css"
// import { Carousel } from "react-bootstrap";
import "react-bootstrap";
import Collage from "./gallery";
import Service from "./service";
import Filter from "./Data";
const Home =()=>{

return(
<div>
        <div className="app">

<h1>Welcome to GBwheels</h1>
            <button href="../pages/Shop/About"></button>

        </div>

    <Filter/>
<Service/>
<Collage/>
    </div>
)


}
export default Home;