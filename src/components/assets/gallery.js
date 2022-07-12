import React from "react";
import './gallery.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";

import { Row } from "react-bootstrap";
import {Container} from "react-bootstrap"
import { Col } from "react-bootstrap";
function Collage() {



return(
<Container fluid>
  <Row>
    <Col>
    <div id="gallery">




<Carousel className="carousel">
  <Carousel.Item className="caro">
    <img
      className="d-block w-100"
      src="../img/nissan.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Nissan</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="caro">
    <img
      className="d-block w-100"
      src="../img/whitecar.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Ferrari</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="caro">
    <img
      className="d-block w-100"
      src="../img/dash.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Porsche</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    </Col>
  </Row>
</Container>


)

    
}

export default Collage;