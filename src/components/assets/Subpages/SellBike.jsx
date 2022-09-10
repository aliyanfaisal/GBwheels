import React from "react";
import Footer from "../footer";
import { Form , Container , Row ,Col , Button } from "react-bootstrap";


import './SellBike.css';
import { Input } from "reactstrap";
const SellBike = () => {


    return (

        <React.Fragment>

<div className="sellaccessory">



    
            <h1>Hello this is sell a bike page</h1>
            <hr />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, earum facilis quia molestiae ab tempore ea, sint quod harum optio exercitationem labore repudiandae, delectus provident unde!</p>
</div>


            <React.Fragment>
                <Container fluid>
                    <Row>
                        <Col>


                            <div id="sellcar">
                                <h3>Sell your Bike</h3>
                                <p>In this form you will fill all the required documents</p>

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
                                    <Form.Group className="mb-3" controlId="formBasicYear">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="number" name="year" placeholder="Please insert the required price" />

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicSelect">
                                        <Form.Label>Select the Model</Form.Label>

                                        <Form.Select name="brand" id="brand" required>
                                            <option value="">-Select-</option>

                                            <option value="tesla">Tesla</option>
                                            <option value="hyundai">hyundai</option>
                                            <option value="audi">audi</option>
                                            <option value="honda">honda civic</option>
                                            <option value="Gli">gli</option>

                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicSelect">
                                        <Form.Label>Select the maker</Form.Label>


                                        <Form.Select name="Tesla" id="tesla" required>

                                            <option value="">-Select-</option>

                                            <option value="tesla">Tesla</option>
                                            <option value="hyundai">Hyundai</option>
                                            <option value="audi">Audi</option>
                                            <option value="honda">Honda</option>

                                        </Form.Select>

                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicFiles">
                                        <Form.Label>please upload files </Form.Label>
                                        <Form.Control type="file" placeholder="files" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasic">
                                        <Input type="checkbox"  />
                                        
                                        <Form.Label>I hereby agree to all terms and conditions </Form.Label>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" id="submit-btn" className="btn-center">
                                        Submit
                                    </Button>
                                </Form>


























                            </div>

                        </Col></Row></Container>


            </React.Fragment>












            )



















<Footer/>

        </React.Fragment>












    )









}
export default SellBike;