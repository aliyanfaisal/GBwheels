import './service.css';
import  './service';
import '../assets/service';
import 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Container } from 'react-bootstrap';
import React from 'react';
import Button from 'react-bootstrap';


function Service() {
return(

    <Container fluid>
  <Row>
    <Col>


<div  id='service'>

      <div class="heading">
            <h1>Our Services</h1>
            <hr/>
        </div>


        <div class="info">

            <div class="info_1">
                <img src="img/icons/1.jpg" alt=""/>
                <div>
                    <h1><a href="#"> Documentation</a></h1>
                    <p>Lorem ipsum, dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consequuntur
                        quam non harum quaerat, est quo</p>
             
           <button>Learn more</button>
                </div>
            </div>

            <div class="info_1">
                <img src="img/icons/2.jpg" alt=""/>
                <div>
                    <h1><a href="#"> Engine modification</a></h1>
                    <p>Lorem ipsum, dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consequuntur
                        quam non harum quaerat, est quo</p>
           <button className=''>Learn more</button>
                
                </div>
            </div>

            <div class="info_1">
                <img src="img/icons/3.jpg" alt=""/>
                <div>
                    <h1><a href="#"> Certification</a></h1>
                    <p>Lorem ipsum, dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consequuntur
                        quam non harum quaerat, est quo</p>
           <button className=''>Learn more</button>
                        
                </div>
            </div>

            <div class="info_1">
                <img src="img/icons/4.jpg" alt=""/>
                <div>
                    <h1><a href="#"> Marketing</a></h1>
                    <p>Lorem ipsum, dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consequuntur
                        quam non harum quaerat, est quo</p>
           <button className=''>Learn more</button>
                </div>
            </div>

            <div class="info_1">
                <img src="img/icons/5.jpg" alt=""/>
                <div>
                    <h1><a href="#"> Products</a></h1>
                    <p>Lorem ipsum, dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consequuntur
                        quam non harum quaerat, est quo</p>
           <button className=''>Learn more</button>
                </div>
            </div>

            <div class="info_1">
                <img src="img/icons/6.jpg" alt=""/>
                <div>
                    <h1><a href="#"> Proper</a></h1>
                    <p>Lorem ipsum, dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consequuntur
                        quam non harum quaerat, est quo</p>
           <button className=''>Learn more</button>
                </div>
            </div>

        </div>
  




</div>


    
    
     </Col>
   </Row>
 </Container>

)


    
}
export default  Service;