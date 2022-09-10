import React from "react";
import "./Shop.css";
import Footer from "./footer";
import pic1 from "../img/caro1.jpg"
import pic2 from "../img/cars.jpg"
import pic3 from "../img/testimonial.jpg"
import { Container , Col , Row } from "reactstrap";


// import Card from "reacts";
import { Card , Button} from "react-bootstrap";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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






            <div id="content">

                
            <h1>Products</h1>
              
</div>

            <hr />



            <div id="cards">


                <div className="card">
                    <img src={pic1} alt="pic1" srcset="" />

                    <div>
                        <h2>Hyundai <span>w3</span> </h2>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, possimus.
                        </p>

                        <h4>Specifications</h4>
                        <b>
                            <ol>
                                <li>Model:<span>2021</span></li>
                                <li>Enginee: 400hp</li>
                                <li>Mileage:20012</li>
                                <li>Color:yellow , black , white</li>

                            </ol>
                        </b>
                        <span>Rating:<FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>
                        <h5>Price:20 lacs</h5>
                        <hr />

                        <NavLink exact activeClassName="active_class" id="link1" to="/Cart">
                                        <button type="submit" id="addtocart">Contact-Seller <FontAwesomeIcon icon={faSquarePhone} /></button>
                        </NavLink>
                    </div>
                </div>



                <div className="card">
                    <img src={pic2} alt="pic2" srcset="" />
                    <div>
                        <h2>corolla <span>g3</span> </h2>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, possimus.</p>
                        <h4>Specifications</h4>
                        <b>
                            <ol>
                                <li>Model:<span>2021</span></li>
                                <li>Enginee: 400hp</li>
                                <li>Mileage:20012</li>
                                <li>Color:yellow , black , white</li>

                            </ol>
                        </b>
                        <span>Rating:<FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>

                        <h5>Price:20.7 lacs</h5>
                        <hr />
                        <NavLink exact activeClassName="active_class" id="link1" to="/Cart">

                                        <button type="submit" id="addtocart">Contact-Seller <FontAwesomeIcon icon={faSquarePhone} /></button>

                            
                            </NavLink>

                    </div></div>
                <div className="card">
                    <img src={pic3} alt="pic3" srcset="" />
                    <div>
                        <h2>Tesla <span>A3</span> </h2>
                        <hr />

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, possimus.</p>
                        <h4>Specifications</h4>
                        <b>
                            <ol>
                                <li>Model:<span>2021</span></li>
                                <li>Enginee: 400hp</li>
                                <li>Mileage:20012</li>
                                <li>Color:yellow , black , white</li>

                            </ol>
                        </b>

                        <span>Rating:<FontAwesomeIcon icon={faStar} glow /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>

                        <h5>Price:32.3 lacs</h5>
                        <hr />
                        <NavLink exact activeClassName="active_class" id="link1" to="/Cart">

                                        <button type="submit" id="addtocart">Contact-Seller <FontAwesomeIcon icon={faSquarePhone} /></button>


                        </NavLink>


                    </div>
                </div> <div className="card">
                    <img src={pic1} alt="pic1" srcset="" />

                    <div>
                        <h2>Honda <span>Gl4</span> </h2>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, possimus.
                        </p>

                        <h4>Specifications</h4>
                        <b>
                            <ol>
                                <li>Model:<span>2021</span></li>
                                <li>Enginee: 400hp</li>
                                <li>Mileage:20012</li>
                                <li>Color:yellow , black , white</li>

                            </ol>
                        </b>
                        <span>Rating:<FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>
                        <h5>Price:20.4 lacs</h5>
                        <hr />
                        <NavLink exact activeClassName="active_class" id="link1" to="/Cart">
                                        <button type="submit" id="addtocart">Contact-Seller <FontAwesomeIcon icon={faSquarePhone} /></button>

                        </NavLink>              </div>
                </div>



                <div className="card">
                    <img src={pic2} alt="pic2" srcset="" />
                    <div>
                        <h2>Vitz <span>A3</span> </h2>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, possimus.</p>
                        <h4>Specifications</h4>
                        <b>
                            <ol>
                                <li>Model:<span>2021</span></li>
                                <li>Enginee: 400hp</li>
                                <li>Mileage:20012</li>
                                <li>Color:yellow , black , white</li>

                            </ol>
                        </b>
                        <span>Rating:<FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>

                        <h5>Price: 14.2 lacs</h5>
                        <hr />                        <NavLink exact activeClassName="active_class" id="link1" to="/Cart">

                                        <button type="submit" id="addtocart">Contact-Seller <FontAwesomeIcon icon={faSquarePhone} /></button>

                        </NavLink>


                    </div></div>
                <div className="card">
                    <img src={pic3} alt="pic3" srcset="" />
                    <div>
                        <h2>Vigo <span>D3</span> </h2>
                        <hr />

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, possimus.</p>
                        <h4>Specifications</h4>
                        <b>
                            <ol>
                                <li>Model:<span>2021</span></li>
                                <li>Enginee: 400hp</li>
                                <li>Mileage:20012</li>
                                <li>Color:yellow , black , white</li>

                            </ol>
                        </b>

                                    <span>Rating:   </span><FontAwesomeIcon icon={faStar} glow /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />

                        <h5>Price:93.4 lacs</h5>
                        <hr />
                        <NavLink exact activeClassName="active_class" id="link1" to="/Cart">
                                        <button type="submit" id="addtocart">Contact-Seller <FontAwesomeIcon icon={faSquarePhone} /></button>


                        </NavLink>


                    </div>
                </div>
            </div>



            <Footer />
                </Col>
            </Row>

        </Container>
        </React.Fragment>

    )





}
export default Shop;