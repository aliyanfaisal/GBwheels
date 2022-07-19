import React from "react";
import  {Container}  from "react-bootstrap";
import {Row} from "react-bootstrap";
import{Col} from "react-bootstrap";

function Filter() {
  return(
<Container>
<Row>
<Col>

<div className="filter">



<span>Select Year</span>
<br/>
<select name="Tesla" id="tesla" value= "tesla">

<option value="tesla">Tesla</option>
<option value="hyundai">Hyundai</option>
<option value="audi">Audi</option>
<option value="honda">Honda</option>

</select>

<span>Select Make</span>
<br/>
<select name="Tesla" id="tesla" value= "tesla">

<option value="tesla">Tesla</option>
<option value="hyundai">Hyundai</option>
<option value="audi">Audi</option>
<option value="honda">Honda</option>

</select>
<br/>

<span>Select Model</span>

<select name="Tesla" id="tesla" value= "tesla">

<option value="tesla">Tesla</option>
<option value="hyundai">Hyundai</option>
<option value="audi">Audi</option>
<option value="honda">Honda</option>

</select>


</div>




















</Col>



</Row>



</Container>

)

}

export default Filter;