import React, { useState } from "react";
import "./Shop.css";
import Footer from "./footer";
import { Container, Col, Row } from "reactstrap";
import Products from "./Shop Components/product_card";



const Shop = () => {



    
    return (
        <React.Fragment>
           

                        <hr />



                        
                                <Products/>
                        <Footer />
                    
        </React.Fragment>

    )





}
export default Shop;