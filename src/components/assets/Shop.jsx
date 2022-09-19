import React, { useState } from "react";
import "./Shop.css";
import Footer from "./footer";
import { Container, Col, Row } from "reactstrap";
import Products from "./Shop Components/product_card";



const Shop = () => {
    return (
        <React.Fragment>
            <Container fluid>
                <Row>

                    <Col>

                        <div id="shop" >


                            <h1> SHOP </h1>

                        </div>

                        <div id="shopfilters">
                            <div  >
                                <br />


                                <span>Select Mileage</span>
                                <br />
                                <br />
                                <select name="Tesla" id="tesla" >
                                    <option value="tesla">-Select-</option>

                                    <option value="10000">10000</option>
                                    <option value="120000">120000</option>
                                    <option value="12123">12123</option>
                                    <option value="22021">22021</option>

                                </select>

                            </div>

                            <div >
                                <br />


                                <span>Select certification</span>
                                <br />
                                <br />
                                <select name="Tesla" id="tesla" >
                                    <option value="tesla">-Select-</option>

                                    <option value="certified">Certified</option>
                                    <option value="non-certfied">Non-Certified</option>
                                </select>

                            </div>


                            <div >
                                <br />


                                <span>Select City</span>
                                <br />
                                <br />
                                <select name="Tesla" id="tesla" >
                                    <option value="tesla">-Select-</option>

                                    <option value="10000">Gilgit</option>
                                    <option value="120000">Skardu</option>
                                    <option value="12123">Ghizer</option>
                                    <option value="22021">Hunza</option>

                                </select>

                            </div>

                            <div >
                                <br />


                                <span>Select Mileage</span>
                                <br />
                                <br />
                                <select name="Tesla" id="tesla" >
                                    <option value="tesla">-Select-</option>

                                    <option value="10000">10000</option>
                                    <option value="120000">120000</option>
                                    <option value="12123">12123</option>
                                    <option value="22021">22021</option>

                                </select>

                            </div>
                        </div>



                        </Col>
                </Row>

            </Container>


                        <div id="content">


                            <h1>Products</h1>

                        </div>

                        <hr />



                        
                                <Products/>
                                
                                
                                
                                
                                
                                






                          


                        <Footer />
                    
        </React.Fragment>

    )





}
export default Shop;