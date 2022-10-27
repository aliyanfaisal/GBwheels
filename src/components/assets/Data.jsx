import React, { useState } from "react";
import './Data.css'
import { NavLink } from "react-router-dom";
import { Input } from "reactstrap";

// ------------------Filter function starts from here----------------//

function Filter() {

// using event listener for changing price.

  function priceChange(event) {
    var value = event.target.value;
    document.getElementById("price").innerHTML = value
  }





  // //   // using react states
  // const [items, setItem] = useState(productdata);


  //  // using event to use Input filters

  // const filterItem = (event) => {
  //   let item = event.target;
  //   let updateditems = productdata.filter((cureElem) => {

  //     // targeting attribute of input tag
  //     let itemName = cureElem[item.getAttribute("name")]

  //     //  using if else to specified item is object then return its item value
  //     if (typeof(itemName) == "object") {
  //       return Object.values(itemName).includes(item.value)

 //     }
  //     return itemName == item.value;


  //   })

  //   // setting setItem to updateditems   

  //   setItem(updateditems);
  // }

  return (

    <React.Fragment>

      <div id="mainfilter">


        <div className="filter">

          <div ><span>Select Make</span>
            <br />
            <br />
            <Input  name="Tesla" id="brand" type="select" required>
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
            <Input  name="model" id="model" type="select" required>
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
            <Input  name="mileage" id="mileage" type="select">
              <option value="select">select</option>
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
            <Input name="maker" id="maker" type="select">
              <option value="select">-Select-</option>
              <option value="pak-motors">pak-motors</option>
              <option value="establishment-venture">establishment-venture</option>
              <option value="yamaha">yamaha</option>
              <option value="iconics">iconics</option>

            </Input>

          </div>










        </div>

        <div id="filter-test" >


          <span>Select Price: <span id="price"></span>  </span>

          <input type="range" id="price" name="price" min="400000" max="900000" onChange={priceChange} />

          <br />
          <NavLink exact activeClassName="active_class" id="link1" to="/Shop">


            <button className="filterbtn animate__animated animate__rubberBand">Filter</button>
          </NavLink>




        </div>


      </div>


      















    </React.Fragment>



  )

}

export default Filter;