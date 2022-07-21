import React from "react";
import  {Button, Container}  from "react-bootstrap";
import {Row} from "react-bootstrap";
import{Col} from "react-bootstrap";
// import {Button} from "react-bootstrap";
import './Data.css';
function Filter() {
  return(
<Container className="pb-3 " >
<Row>
<Col>
<div id="mainfilter">


<div className="filter">

<div >

<span>Select Year</span>
<br/>
<br/>
<select name="year" id="year" value= "year">
<option value="tesla">-Select-</option>

<option value="2009">2021</option>
<option value="hyundai">2001</option>
<option value="audi">2003</option>
<option value="honda">2005</option>
<option value="honda">2008</option>
<option value="honda">2009</option>
<option value="honda">2012</option>

</select>
</div>
<div ><span>Select Make</span>
<br/>
<br/>
<select name="Tesla" id="tesla" value= "tesla">
<option value="tesla">-Select-</option>


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
<select name="Tesla" id="tesla" value= "tesla">
<option value="tesla">-Select-</option>

<option value="tesla">Tesla</option>
<option value="hyundai">Hyundai</option>
<option value="audi">Audi</option>
<option value="honda">Honda</option>

</select>

</div>
<div >

  
<span>Select Price:12120pkr </span>
<br/>
<br/>
<input type="range" name="price" id="price" value="200"  maxlength="9000000" minlength="100000" />
<br/>
<Button className=" bg-secondry mt-4 ">Select Inventory  </Button>
</div>


<div >
<br/>
<span>Select Year</span>
<br/>
<br/>
<select name="year" id="year" value= "year">
<option value="tesla">-Select-</option>


<option value="2009">2021</option>
<option value="hyundai">2001</option>
<option value="audi">2003</option>
<option value="honda">2005</option>
<option value="honda">2008</option>
<option value="honda">2009</option>
<option value="honda">2012</option>

</select>
</div>
<div >
  <br/>
  <span>Select Condition</span>
<br/>
<br/>
<select name="Tesla" id="tesla" value= "tesla">
{/* <option value="tesla">Please select Condition</option> */}
<option value="tesla">-Select-</option>

<option value="tesla">Certified</option>
<option value="hyundai">NCP</option>
<option value="audi">Black vigo</option>
<option value="honda">Honda</option>

</select>
</div>

<div >
<br/>

  
<span>Select Mileage</span>
<br/>
<br/>
<select name="Tesla" id="tesla" value= "tesla">
<option value="tesla">-Select-</option>

<option value="tesla">10000</option>
<option value="hyundai">120000</option>
<option value="audi">12123</option>
<option value="honda">22021</option>

</select>

</div>
</div>


</div>



</Col>



</Row>


</Container>

)

}

export default Filter;