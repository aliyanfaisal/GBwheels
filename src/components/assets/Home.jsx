import React from "react";
import "./Home.css"

import "react-bootstrap";
import Filter from "./Data";
import Footer from "./footer";
import Gallery from "./gallery";
import { Form } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { faCableCar } from "@fortawesome/free-solid-svg-icons";
import { faBusinessTime} from "@fortawesome/free-solid-svg-icons";
import { faBarChart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Home = () => {

        return (
                <React.Fragment>
                        <div className="app">

                                <h1>Welcome to GBwheels</h1>
                                <NavLink to='/about'>
                                <button href="">Click here</button>
                                </NavLink>
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







                    
                        <div id="information">

                                <div>
                                <h3>FAQS</h3>
                                        <hr />
                                <Accordion id="accord" >
                                        <Accordion.Item >
                                                <Accordion.Header>What type of Vehicles GBwheels handle.?</Accordion.Header>
                                                <Accordion.Body>

                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur harum commodi quidem omnis aliquid veritatis minima sequi! Nisi, eligendi soluta.
                                                </Accordion.Body>
                                        </Accordion.Item><Accordion.Item >
                                                <Accordion.Header>How will i get paid ?</Accordion.Header>
                                                <Accordion.Body>

                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur harum commodi quidem omnis aliquid veritatis minima sequi! Nisi, eligendi soluta.
                                                </Accordion.Body>
                                        </Accordion.Item><Accordion.Item >
                                                <Accordion.Header>Do you sell or buy bikes?</Accordion.Header>
                                                <Accordion.Body>

                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur harum commodi quidem omnis aliquid veritatis minima sequi! Nisi, eligendi soluta.
                                                </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item >
                                                <Accordion.Header>How long it take to buy or sell cars?</Accordion.Header>
                                                <Accordion.Body>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum itaque minus officiis, ipsa mollitia sit illum! Velit explicabo eos voluptatem?
                                                </Accordion.Body>
                                        </Accordion.Item>
                                </Accordion>
                                </div>
                                <div>
<h2>Details form</h2>
<hr />
                                        <Form>
                                                <Form.Group className="mb-3" controlId="formBasicName">
                                                        <Form.Label>Name</Form.Label>

                                                        <Form.Control type="text" name="name" placeholder="please enter your name" />

                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicAge">
                                                        <Form.Label>Age</Form.Label>
                                                        <Form.Control type="number" name="age" placeholder="21" />

                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Email address</Form.Label>
                                                        <Form.Control type="email" placeholder="Enter email" />

                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                        <Form.Label>Password</Form.Label>
                                                        <Form.Control type="password" placeholder="Password" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <Form.Check type="checkbox" label="Check me out" />
                                                </Form.Group>
                                                <Button variant="primary" type="submit">
                                                        Submit
                                                </Button>
                                                <Button variant="primary" type="submit"  className="closebutton">
                                                        Close
                                                </Button>
                                        </Form>


                                </div>
                                
                                </div>
                        <Gallery />
                    
                        <Footer />


                </React.Fragment>
        )


}
export default Home;