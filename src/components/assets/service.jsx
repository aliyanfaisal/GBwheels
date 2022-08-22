import './service.css';
import 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import Footer from './footer';
// import Button from 'react-bootstrap';


const Service = () => {
    return (

        <Container fluid >
            <Row>
                <Col>

                    <div class="heading">
                        <h1>Our Services</h1>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Corporis harum explicabo cupiditate earum iure, perferendis similique nobis quidem laboriosam. Cumque.
                        </p>

                        <hr />
                    </div>

                    <div id='service'>



                        <div class="info">

                            <div class="info_1">
                                <img src="img/icons/1.jpg" alt="" />
                                <div>
                                    <h1> Documentation</h1>
                                    <p>Lorem ipsum, dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consequuntur
                                        quam non harum quaerat, est quo</p>

                                    <button>Learn more</button>
                                </div>
                            </div>

                            <div class="info_1">
                                <img src="img/icons/2.jpg" alt="" />
                                <div>
                                    <h1> Engine modification</h1>
                                    <p>Lorem ipsum, dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consequuntur
                                        quam non harum quaerat, est quo</p>
                                    <button className=''>Learn more</button>

                                </div>
                            </div>

                            <div class="info_1">
                                <img src="img/icons/3.jpg" alt="" />
                                <div>
                                    <h1>Certification</h1>
                                    <p>Lorem ipsum, dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consequuntur
                                        quam non harum quaerat, est quo</p>
                                    <button className=''>Learn more</button>

                                </div>
                            </div>

                            <div class="info_1">
                                <img src="img/icons/4.jpg" alt="" />
                                <div>
                                    <h1> Marketing</h1>
                                    <p>Lorem ipsum, dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consequuntur
                                        quam non harum quaerat, est quo</p>
                                    <button className=''>Learn more</button>
                                </div>
                            </div>

                            <div class="info_1">
                                <img src="img/icons/5.jpg" alt="" />
                                <div>
                                    <h1> Products</h1>
                                    <p>Lorem ipsum, dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consequuntur
                                        quam non harum quaerat, est quo</p>
                                    <button className=''>Learn more</button>
                                </div>
                            </div>

                            <div class="info_1">
                                <img src="img/icons/6.jpg" alt="" />
                                <div>
                                    <h1> Proper Handling </h1>
                                    <p>Lorem ipsum, dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consequuntur
                                        quam non harum quaerat, est quo</p>
                                    <button className=''>Learn more</button>
                                </div>
                            </div>

                        </div>







                    </div>


                    <div><Footer/></div>

                </Col>
            </Row>
        </Container>

    )



}
export default Service;