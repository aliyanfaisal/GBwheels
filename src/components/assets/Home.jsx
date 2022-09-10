import React from "react";
import "./Home.css"

import "react-bootstrap";
import Filter from "./Data";
import Footer from "./footer";
import Gallery from "./gallery";

import { Accordion } from "react-bootstrap";
import { faBusinessTime, faCableCar ,faBarChart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink } from "react-router-dom";
const Home = () => {
 
        return (
                <React.Fragment>
                        <div className="app">
<div>
                                <h1>Find the Car You Want, Your Way</h1>
                                <p>Then, build your deal to fit your needs.
</p>

                                </div>
                                <div className="btnset">

                                <NavLink to='/Shop' >
                                                <button href="" id="shop2" className="col-4">Shop here</button>
                                </NavLink>


<br />                                        


                                        <NavLink exact activeClassName="active_class" to="/Sellcar"  > 
                                        <button id="sellcars" className="col-2">
                                                        Sell a car



                                        </button>
                                         

                                        </NavLink>








                                        <NavLink exact activeClassName="active_class" to="/SellBike">

                                                <button href="" id="sellbikes" className="col-2">Sell bike</button>

                                        </NavLink>
                                        
                                        
                                </div>



                        </div>

                        <Filter />

                        <div>
                                <div className="mission">
                                        <h2>Our mission</h2>
                                        <p> GBWheels is  a platform first of its kind that used for buying and selling cars </p>
                                        <div className="more">

                                                <div><h2>Platform</h2>
                                                        <FontAwesomeIcon icon={faCableCar}/>

                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.,<br /> Dolor voluptas,
                                                                ipsam nisi debitis ducimus quidem optio accusamus tempore labore ratione.</p></div>
                                                <div><h2>Business Growth</h2>
                                                        <FontAwesomeIcon icon={faBusinessTime} />
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.,<br /> Dolor voluptas,
                                                                ipsam nisi debitis ducimus quidem optio accusamus tempore labore ratione.</p></div>
                                                <div>
                                                        <h2>Reasonable Price</h2>
                                                        <FontAwesomeIcon icon={faBarChart} />
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.,<br /> Perferendis ut fugit commodi reiciendis sit, nihil sint debitis. Modi, tempora qui?</p>

                                                </div>
                                        </div>

                                </div>
                        </div>






                
                
                        <Gallery />





                        <div id="information">


                                <h3>FAQS</h3>        <hr />

                                <Accordion defaultActiveKey="0" >
                                        <Accordion.Item eventKey="0">
                                                <Accordion.Header>What type of Vehicles GBwheels handle.?</Accordion.Header>
                                                <Accordion.Body>

                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur harum commodi quidem omnis aliquid veritatis minima sequi! Nisi, eligendi soluta.
                                                </Accordion.Body>
                                        </Accordion.Item><Accordion.Item eventKey="1">
                                                <Accordion.Header>How will i get paid ?</Accordion.Header>
                                                <Accordion.Body>

                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur harum commodi quidem omnis aliquid veritatis minima sequi! Nisi, eligendi soluta.
                                                </Accordion.Body>
                                        </Accordion.Item><Accordion.Item eventKey="2">
                                                <Accordion.Header>Do you sell or buy bikes?</Accordion.Header>
                                                <Accordion.Body>

                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur harum commodi quidem omnis aliquid veritatis minima sequi! Nisi, eligendi soluta.
                                                </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                                <Accordion.Header>How long it take to buy or sell cars?</Accordion.Header>
                                                <Accordion.Body>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum itaque minus officiis, ipsa mollitia sit illum! Velit explicabo eos voluptatem?
                                                </Accordion.Body>
                                        </Accordion.Item>
                                </Accordion>
                        </div>



                        <Footer />


                </React.Fragment>
        )


}
export default Home;