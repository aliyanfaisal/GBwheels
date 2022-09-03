import React from "react";
import "./Shop.css";
import Footer from "./footer";
import pic1 from "../img/caro1.jpg"
import pic2 from "../img/cars.jpg"
import pic3 from "../img/testimonial.jpg"
// import Card from "reacts";
// import { Card , Button } from "react-bootstrap";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Shop = () => {

    return (
        <React.Fragment>

            <div id="shop" >



                <h1> SHOP </h1>

            </div>
            <div id="content">

                
            <h1>Products</h1>
                <p>Following are some products related to this search</p>
</div>

            <hr />
{/* 
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pic1} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>  */}
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
                        <h5>Price:2000000Pkr</h5>
                        <hr />

                        <NavLink exact activeClassName="active_class" id="link1" to="/Cart">
                        <button id="addtocart" type="submit">Add to Cart  <FontAwesomeIcon icon={faCartShopping} /></button>
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

                        <h5>Price:2009000Pkr</h5>
                        <hr />
                        <NavLink exact activeClassName="active_class" id="link1" to="/Cart">

                            <button type="submit" id="addtocart">Add to Cart<FontAwesomeIcon icon={faCartShopping} /></button>

                            
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

                        <h5>Price:2087900Pkr</h5>
                        <hr />
                        <NavLink exact activeClassName="active_class" id="link1" to="/Cart">

                            <button type="submit" id="addtocart">Add to Cart<FontAwesomeIcon icon={faCartShopping} /></button>


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
                        <h5>Price:2000000Pkr</h5>
                        <hr />
                        <NavLink exact activeClassName="active_class" id="link1" to="/Cart">
<button id="addtocart" type="submit">Add to Cart  <FontAwesomeIcon icon={faCartShopping} /></button>

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

                        <h5>Price:2009000Pkr</h5>
                        <hr />                        <NavLink exact activeClassName="active_class" id="link1" to="/Cart">

                            <button type="submit" id="addtocart">Add to Cart<FontAwesomeIcon icon={faCartShopping} /></button>


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

                        <span>Rating:<FontAwesomeIcon icon={faStar} glow /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>

                        <h5>Price:938200Pkr</h5>
                        <hr />
                        <NavLink exact activeClassName="active_class" id="link1" to="/Cart">

                            <button type="submit" id="addtocart">Add to Cart<FontAwesomeIcon icon={faCartShopping} /></button>


                        </NavLink>


                    </div>
                </div>
            </div>



            <Footer />
        </React.Fragment>
    )





}
export default Shop;