import React, { useState } from "react";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import './Data.css'
import { NavLink } from "react-router-dom";
import productdata from "./Shop Components/shop-data/shopdata";
import { Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// ------------------Filter function starts from here----------------//

function Filter() {
  function priceChange(event) {
    var value = event.target.value;
    document.querySelector("#price").innerHTML = value
  }





  //   // using react states
  const [items, setItem] = useState(productdata);


  // // using event to use Input filters

  const filterItem = (event) => {
    let item = event.target;
    let updateditems = productdata.filter((cureElem) => {

      // targeting attribute of input tag
      let itemName = cureElem[item.getAttribute("name")]

      //  using if else to specified item is object then return its item value
      if (typeof (itemName) == "object") {
        return Object.values(itemName).includes(item.value)
      }
      return itemName == item.value;


    })

    // setting setItem to updateditems   

    setItem(updateditems);
  }







  return (

    <React.Fragment>

      <div id="mainfilter">


        <div className="filter">

          <div ><span>Select Make</span>
            <br />
            <br />
            <Input onChange={filterItem} name="Tesla" id="brand" type="select" required>
              <option value="">-Select-</option>


              <option value="tesla">Tesla</option>
              <option value="hyundai">Hyundai</option>
              <option value="audi">Audi</option>
              <option value="honda">Honda</option>

            </Input>
          </div>

          <div >


            <span>Select Model</span>
            <br />
            <br />
            <Input onChange={filterItem} name="model" id="model" type="select" required>
              <option value="">-Select-</option>

              <option value="g3">g3</option>
              <option value="T2v.1">T2v.1</option>
              <option value="q3">q3</option>
              <option value="V34">V34</option>
              <option value="M23">M23</option>
              <option value="A23">A23</option>

            </Input>

          </div>


          <div  >


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


            <span>Select Maker</span>
            <br />
            <br />
            <Input onChange={filterItem} name="maker" id="maker" type="select">
              <option value="tesla">-Select-</option>
              <option value="pak-motors">pak-motors</option>
              <option value="establishment-venture">establishment-venture</option>
              <option value="yamaha">yamaha</option>
              <option value="iconics">iconics</option>

            </Input>

          </div>










        </div>

        <div id="filter-test" >


          <span>Select Price: <span id="price"></span>  </span>
          <br />
          <br />

          <input type="range" id="vol" name="vol" min="400000" max="900000" onChange={priceChange} />

          <br />
          <NavLink exact activeClassName="active_class" id="link1" to="/Shop">


            <button className="filterbtn" onChange={filterItem}>Filter</button>
          </NavLink>




        </div>


      </div>

{/* 
      {

        items.map((elems) => {

          // destruncturing data

          const { id, price, car, category, maker, model, info, pic, imgalt, contact, color } = elems;


          return (

            <div>
              <div className="col-12 col-md-12 col-lg-4 img-div ">

                <img src={pic} alt={imgalt} className="img-fluid" />

              </div>

              <h2>{car}</h2>

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



                  <a href={"tel:" + contact} >
                    <button className="btn btn-warning text-center" >



                      <FontAwesomeIcon icon={faSquarePhone} />   contact-seller
                    </button>

                  </a>
                </div>







              </div>

            </div>
          )






        })









      } */}















    </React.Fragment>



  )

}

export default Filter;