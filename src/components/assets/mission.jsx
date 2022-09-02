import React from "react";
import './mission.css';
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./footer";


function Mission() {

    return (

<React.Fragment>
        <div id="video">
            <Container fluid>
                <Row>
                    <Col>



                        <h1>Mission</h1>
                        <div className="videocars">





                            <div>
                                <iframe width="450" height="480" src="https://www.youtube.com/embed/2LqzF5WauAw" title="Interstellar Movie - Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            </div>
                            <div>
                                <iframe width="450" height="480" src="https://www.youtube.com/embed/L3pk_TBkihU" title="Interstellar Movie - Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                            <div>

                                <iframe width="450" height="480" src="https://www.youtube.com/embed/-iRcrJuR7zc" title="Interstellar Movie - Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>


                        </div>
                        <div id="car-videos"><h2>Car-Videos</h2>

                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe voluptate provident, obcaecati accusamus labore itaque,<br /> distinctio praesentium, doloremque laboriosam non. Animi reprehenderit voluptates impedit temporibus illum vitae<br /> voluptate officia. Sequi tempora in adipisci unde pariatur. Sit nam perspiciatis tempora.,<br />
                                Ad temporibus est inventore officiis, dolorum debitis accusantium ipsam sit tenetur.</p></div>

<div>
<h2>Marketing videos</h2>



<div className="videocars">


                                    <div><iframe width="450" height="480" src="https://www.youtube.com/embed/zzCrFWjKPy8" title="Episode 3 Preview | House of the Dragon (HBO)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div>
                                <iframe width="450" height="480" src="https://www.youtube.com/embed/L3pk_TBkihU" title="Interstellar Movie - Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                            <div>

                                <iframe width="450" height="480" src="https://www.youtube.com/embed/-iRcrJuR7zc" title="Interstellar Movie - Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>


                        </div>


                            </div>
                  </Col>
                </Row>
                
            </Container>
            
        </div>









            <Footer />

</React.Fragment>


    )


}

export default Mission;