import React from "react";
import './Blog.css';
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./footer";


function Blog() {

    return (

<React.Fragment>
            <Container fluid>
                <Row>
                    <Col>

<div className="missions">


    
<h1>Mission</h1>
<hr />
</div>

<div>

                        <h2>Marketing videos</h2>
<hr />
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
            
        








            <Footer />

</React.Fragment>


    )


}

export default Blog;