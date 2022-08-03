import React from "react";
import './video.css';
import { Container, Row , Col } from "react-bootstrap";


function Video() {

    return (


        <div id="video">
<Container fluid>
    <Row>
        <Col>
        
        

            <h1>Video</h1>
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

                    </Col>
                </Row>
            </Container>

            </div>














            )


}

            export default Video;