import React ,{useState} from "react";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import "./product-card.css"
import "bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import productdata from "./shop-data/shopdata";
import { Input } from "reactstrap";

function Products() {
    // using react states
    const [items, setItem] = useState(productdata);


// using event to use Input filters

    const filterItem = (event) => {
            let item= event.target;
let  updateditems = productdata.filter((cureElem) => {

// targeting attribute of input tag
            let itemName= cureElem[item.getAttribute("name")]

            //  using if else to specified item is object then return its item value
            if(typeof(itemName)=="object"){
                return Object.values(itemName).includes(item.value) 
            }  
            return itemName == item.value;


        })

        // setting setItem to updateditems   

setItem(updateditems);
    }


    return (
        <React.Fragment>


<Container fluid>
                <Row>

                    <Col>

                        <div id="shop" >


                            <h1> SHOP </h1>

                        </div>


                        <div id="shopfilters">
                            <div>
                                <span>Select Mileage</span>
                                <br />
                                <br />
                                <Input onChange={filterItem} name="mileage" id="mileage" type="select">
                                    <option value="select">-Select-</option>

                                    <option value="10000">10000</option>
                                    <option value="120000">120000</option>
                                    <option value="12123">12123</option>
                                    <option value="22021">22021</option>

                                </Input>

                            </div>

                            <div >
                     

                                <span>Select certification</span>
                                <br />
                                <br />
                                <Input  onChange={filterItem} name="color" id="color" type="select" >
                                    <option value="tesla">-Select-</option>

                                    <option value="red">red</option>
                                    <option value="yellow">yellow</option>
                                </Input>

                            </div>


                            <div >
                     

                                <span>Select City</span>
                                <br />
                                <br />
                                <Input  onChange={filterItem} name="maker" id="maker" type="select" >
                                    <option value="tesla">-Select-</option>

                                    <option value="honda">Honda</option>
                                    <option value="yamaha">Yamaha</option>

                                </Input>

                            </div>

                            <div >
                     

                                <span>Select Model</span>
                                <br />
                                <br />
                                <Input onChange={filterItem} name="maker" id="tesla"  type="select">
                                    <option value="tesla">-Select-</option>

                                    

                                    <option value="pak-motors">pak-motors</option>
                                    <option value="establishment-venture">establishment-venture</option>
                                    <option value="yamaha">yamaha</option>
                                    <option value="iconics">iconics</option>

                                </Input>

                            </div>
                        </div>



                        </Col>
                </Row>

            </Container>





            <div className="Container my-4">
                <div className="menu-tab  d-flex justify-content-around">



                <button onClick={()=>setItem(productdata)} className="btn btn-primary ">All-Products</button>
                            


                </div>
            </div>

            {/* MAIN DATA SECTION */}
            {/* using map method to get data */}


















            <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto" >


                        <div className="row my-5">


                            {/*-------------------------------------- using Map function----------------------------------------- */}


                            {
                                items.map((elem) => {
                                    // destructuring incoming data

                                    const { id, car, pic, model, maker, color, price, imgalt, info, contact, category } = elem;








                                    return (




                                        <div className="item1 col-12 col-md-6  col-lg-4 col-xl-4">

                                            <div className="row  item-inside">
                                                <div className="col-12 col-md-12 col-lg-4 img-div ">


                                                    <img src={pic} alt={imgalt} className="img-fluid" />

                                                </div>





                                                {/* menu-description */}

                                                <div className="col-12 col-md-12 col-lg-8">

                 
                                                    <h2> <span>{id}</span>{car}</h2>

                                                    <div className="main-title pt-4 pb-3">
<span>Specs</span>
<hr />
                                                        <ul><li>{model}</li>
                                                            <li>{category}</li>
                                                            <li>{maker}</li>
                                                            <li>{color}</li></ul>
                                                        <p>{info}</p>
                                                    </div>

                                                    <div className="me">


                                                        <div className=" d-flex justify-content-around ">
                                                            <span>price:{price}</span>



                                                            <a href={"tel:"+contact} >
                                                                <button className="btn btn-warning text-center" >



                                                                 <FontAwesomeIcon icon={faSquarePhone}/>   contact-seller
                                                                </button>

                                                            </a>
                                                        </div>


                                                    </div>




                                                </div>




                                            </div>





                                        </div>


















                                    )






                                })

                            }




                        </div>






                    </div>
                </div>


            </div>









        </React.Fragment>
    )
}

export default Products;