import React from "react";
import Footer from "../footer";
import { Container, Form, Row, Col } from "react-bootstrap";
import { Button } from "reactstrap";
import './Sellvehicle.css'
import 'react-bootstrap'
const Sellvehicle = () => {


    return (

        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col>

                        <div id="maindiv">
                            <h1>Welcome just a few more steps   </h1>
                            <hr />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet ea, sint iusto nulla quas incidunt. Accusamus dolor reiciendis nostrum modi similique quisquam vel inventore illum labore, quibusdam nemo ut consequatur?</p>



                        </div>

                        <div id="sellcar">
                            <h3>Sell your Vehicle</h3>
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

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <input type="checkbox" />

                                    <Form.Label>I hereby agree to all terms and conditions </Form.Label>
                                </Form.Group>
                                <Button variant="primary" type="submit" id="submit-btn" className="btn-center">
                                    Submit
                                </Button>
                                <Form.Label>

                                <small class="u-text-grey-dark-grey">
                                    By submitting your information, you agree to allow EF to process your personal information in accordance with <a href="" target="_blank">GB-Wheels Privacy Policy</a> and to allow the use of your data for direct marketing purposes. By entering your mobile number, you agree to receive recurring text messages about upcoming offers from EF Gap Year at the number provided and you understand that consent to receive marketing text messages is not a condition of purchase. You agree to all <a href="https://efgapyear.com/text-message-terms-and-conditions/?utm_medium=cpc&amp;utm_source=google&amp;utm_campaign=study-abroad&amp;utm_content=study-abroad&amp;utm_term=studying abroad" target="_blank">GB-Wheels Texting Terms and Conditions</a>. 						</small>

                                    </Form.Label>
                            </Form>


























                        </div>

                    </Col></Row></Container>


            <Footer />
        </React.Fragment>












    )









}
export default Sellvehicle;