import React , {useState} from "react";
import { Row, Col, Container}  from "react-bootstrap";
import './Data.css'
import { NavLink } from "react-router-dom";
// import Products from "./Shop Components/product_card";


  
    



















function Filter() {
  function priceChange(event){  
      var value = event.target.value;
      document.querySelector("#price_span").innerHTML=value
  }





  // function Products() {
  //   // using react states
  //   const [items, setItem] = useState(productdata);
  
  
  // // using event to use Input filters
  
  //   const filterItem = (event) => {
  //           let item= event.target;
  // let  updateditems = productdata.filter((cureElem) => {
  
  // // targeting attribute of input tag
  //           let itemName= cureElem[item.getAttribute("name")]
  
  //           //  using if else to specified item is object then return its item value
  //           if(typeof(itemName)=="object"){
  //               return Object.values(itemName).includes(item.value) 
  //           }  
  //           return itemName == item.value;
  
  
  //       })
  
  //       // setting setItem to updateditems   
  
  // setItem(updateditems);
  //   }
  // }
  
  




  return(
<Container className="pb-3 " >
<Row>
<Col>
<div id="mainfilter">


<div className="filter">

<div >

<span>Select Brand</span>
<br/>
<br/>
<select name="brand" id="brand" required >
<option value="">-Select-</option>

<option value="tesla">Tesla</option>
<option value="hyundai">hyundai</option>
<option value="audi">audi</option>
<option value="honda">honda civic</option>
<option value="Gli">gli</option>

</select>
</div>
<div ><span>Select Make</span>
<br/>
<br/>
<select name="Tesla" id="brand"  required>
<option value="">-Select-</option>


<option value="tesla">Tesla</option>
<option value="hyundai">Hyundai</option>
<option value="audi">Audi</option>
<option value="honda">Honda</option>

</select>
</div>

<div >

  
<span>Select Model</span>
<br/>
<br/>
<select name="Tesla" id="brand" required>
<option value="">-Select-</option>

<option value="tesla">Tesla</option>
<option value="hyundai">Hyundai</option>
<option value="audi">Audi</option>
<option value="honda">Honda</option>

</select>

</div>

<div >
<br/>
<span>Select Year</span>
<br/>
<br/>
<select name="year" id="brand"  required>
<option value="tesla">-Select-</option>


<option value="2009">2021</option>
<option value="2001">2001</option>
<option value="2003">2003</option>
<option value="2005">2005</option>
<option value="2008">2008</option>
<option value="2009">2009</option>
<option value="2012">2012</option>

</select>
</div>
<div >
  <br/>
  <span>Select Condition</span>
<br/>
<br/>
<select name="select" id="brand" required>
<option value="">-Select-</option>

<option value="tesla">Certified</option>
<option value="hyundai">NCP</option>
<option value="audi">Black vigo</option>
<option value="honda">Honda</option>

</select>
</div>

              <div >
                <br />


                <span>Select Mileage</span>
                <br />
                <br />
                <select name="Tesla" id="brand"  >
                  <option value="tesla">-Select-</option>

                  <option value="10000">10000</option>
                  <option value="120000">120000</option>
                  <option value="12123">12123</option>
                  <option value="22021">22021</option>

                </select>

              </div>






</div>

            <div id="filter-test" >


              <span>Select Price: <span id="price_span"></span> </span>
              <br />
              <br />

              <input type="range" id="vol" name="vol" min="400000" max="900000" onChange={priceChange} />

              <br />
              <NavLink exact activeClassName="active_class" id="link1" to="/Shop">


                <button className="filterbtn">Filter</button></NavLink>
            </div>


</div>



</Col>



</Row>


</Container>

)

}

export default Filter;