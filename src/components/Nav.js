import React , {useState} from "react";
import   "./Nav.css"
import { Form , Button } from "react-bootstrap";
import Popup from "./assets/form";

function  Nav() {

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







 
 
<nav>
    
     <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#form'>About</a></li>
          <li><a href='#gallery'>Gallery</a></li>
          <li><a href='#service'>Service</a></li>
          {/* <Form1/> */}


                    <Button onClick={togglePopup}>Shop</Button>
          </ul>
          </nav> 
          </div>
        

    )


    }
export default Nav;