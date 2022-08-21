import React, { useState } from "react";
import "./Nav.css"
import { Form, Button } from "react-bootstrap";
import Popup from "./assets/form";
import 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Menu() {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen)

    }



    return (


        <div className="menu">





            {
                isOpen && <Popup handleClose={togglePopup}
                    content={
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
                            <Button variant="primary" type="submit" onClick={togglePopup} className="closebutton">
                                Close
                            </Button>
                        </Form>
                    }

                />
            }




            <div id="navbar">





                <Navbar collapseOnSelect expand="lg" id="topmenu">
                    <Container>
                        <Navbar.Brand href="#home" id="title">GB-Wheels</Navbar.Brand>
                        <br />
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#Home">
<NavLink exact activeClassName="active_class" id="link1" to="/">Home</NavLink> 
                                    </Nav.Link>
                                     <Nav.Link href="#Video"> <NavLink exact activeClassName="active_class" id="link1" to="video">Video</NavLink>





                                </Nav.Link> 
                                
                                
                                
                                <Nav.Link href="#">




                                    <NavLink exact activeClassName="active_class" id="link1" to="Service">Service</NavLink>






                                </Nav.Link>
                                <Nav.Link href="#"><NavLink exact activeClassName="active_class" id="link1" to="about">About</NavLink>
                                </Nav.Link>
                                <Nav.Link href="#"><NavLink exact activeClassName="active_class" id="link1" to="/Shop">Shop</NavLink>
                                </Nav.Link>

                            </Nav>
                            <Nav>
                                <Nav.Link href="#">
                                    <Button onClick={togglePopup} className="bg-primary">Signin</Button>

                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>





          </div>
        </div>

    )


}