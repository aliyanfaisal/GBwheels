import React from "react";
import './gallery.css'

import { Row, Container, Col, Carousel } from "react-bootstrap";
export default function Gallery() {



return(
<Container fluid>
  <Row>
    <Col>
    <div id="gallery">

    <Carousel fade>
      <Carousel.Item >
              <img id="pic"
        
          className="d-block w-80"
          src="img/auto.jpg"
          alt="First slide"
        />
              <Carousel.Caption id="cont">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>``
            <Carousel.Item  >
        <img
                id="pic"
          className="d-block w-80"
          src="img/car3.jpg"
          alt="Second slide"
        />

              <Carousel.Caption id="cont">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
            <Carousel.Item >
        <img
                id="pic"
          className="d-block w-80"
          src="img/car.jpg"
          alt="Third slide"
        />

              <Carousel.Caption id="cont">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  

</div>
    </Col>
  </Row>
</Container>


)

    
}
