import React , {useState} from "react";
import   "./Nav.css"
import { Form , Button} from "react-bootstrap";
import Popup from "./assets/form";
import  'react-bootstrap';
import { NavLink } from "react-router-dom";
import Home from "./App";
// import Collage from "./assets/gallery";
import Video from "./assets/Video";
import Service from "./assets/service";
import About from "./pages/Shop/About";
function  Nav() {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen)

    }



    return (


            <div className="menu">


                 


            {
                isOpen && <Popup  handleClose={togglePopup}
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
<nav><ul>


                    <span><a href="https://gbwheels.com/">GB-Wheels</a></span>

                    <NavLink exact activeClassName="active_class" id="link1" to="/Home">Home</NavLink>
                    <NavLink exact activeClassName="active_class" id="link1" to="/About">About</NavLink>

                    <NavLink exact activeClassName="active_class" id="link1" to="/video">Video</NavLink>
                    <NavLink exact activeClassName="active_class" id="link1" to="/Service">Service</NavLink>


                    <Button onClick={togglePopup}>Signin</Button>
  
          </ul>
          </nav> 
            </div>
          </div>

    )


    }
export default Nav;