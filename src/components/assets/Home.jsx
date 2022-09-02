import React from "react";
import "./Home.css"

import "react-bootstrap";
import Filter from "./Data";
import Footer from "./footer";
import Gallery from "./gallery";
import { faCableCar } from "@fortawesome/free-solid-svg-icons";
import { faBusinessTime} from "@fortawesome/free-solid-svg-icons";
import { faBarChart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
const Home = () => {

        return (
                <>
                        <div className="app">

                                <h1>Welcome to GBwheels</h1>
                                <NavLink to='/about'>
                                <button href="">Click here</button>
                                </NavLink>
                        </div>

                        <Filter />

                        <div>
                                <div className="mission">
                                        <h2>Our mission</h2>
                                        <p> GBWheels is  a platform first of its kind that used for buying and selling cars </p>
                                        <div className="more">

                                                <div><h2>Platform</h2>
                                                        <FontAwesomeIcon icon={faCableCar}/>

                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.,<br /> Dolor voluptas,
                                                                ipsam nisi debitis ducimus quidem optio accusamus tempore labore ratione.</p></div>
                                                <div><h2>Business Growth</h2>
                                                        <FontAwesomeIcon icon={faBusinessTime} />
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.,<br /> Dolor voluptas,
                                                                ipsam nisi debitis ducimus quidem optio accusamus tempore labore ratione.</p></div>
                                                <div>
                                                        <h2>Reasonable Price</h2>
                                                        <FontAwesomeIcon icon={faBarChart} />
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.,<br /> Perferendis ut fugit commodi reiciendis sit, nihil sint debitis. Modi, tempora qui?</p>

                                                </div>
                                        </div>

                                </div>
                        </div>







                        <Gallery />
                        <Footer />


                </>
        )


}
export default Home;