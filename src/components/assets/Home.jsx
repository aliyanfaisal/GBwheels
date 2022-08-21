import React from "react";
import "./Home.css"

import "react-bootstrap";
import Filter from "./Data";
import Footer from "./footer";
import Gallery from "./gallery";
const Home =()=>{

return(
<div>
        <div className="app">

<h1>Welcome to GBwheels</h1>
            <button href="">Click here</button>

        </div>
<Filter/>
        <div>
            <div> <Gallery/> </div>
             <div></div>
            <div></div>


        </div>


<Footer/>

    </div>
)


}
export default Home;