import React from "react";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Redirect, Route, Router, Switch } from "react-router-dom";
import "./product-card.css"
import "bootstrap";
import { Container , Row , Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import productdata from "./shop-data/shopdata";
import { ready } from "jquery";







function Products(){
// using react states
    const [items , setItem] =React.useState(productdata);

    const filterItem =(catgitem)=>{

const updateditems = productdata.filter((cureElem)=>{



return cureElem.category === catgitem;










})
setItem(updateditems);
    }


    return (
        <React.Fragment>

<h1 className="mt-5 text-center">Select your required Vehicle</h1>
        <hr /><span>Select certification</span>
                                <br />
                                <br />
                                



<div className="Container">
<div className="menu-tab  d-flex justify-content-around">

<select name="Tesla" id="tesla" >
                                    


<button  className="btn btn-warning" onClick={()=> filterItem('NCP')}>NCP</button>
<button  className="btn btn-warning" onClick={()=> setItem(productdata)}>ALL</button>
                                </select>
{/* <button  className="btn btn-warning" onClick={()=> filterItem('Certified')}>Certified</button> */}




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
items.map((elem)=>{
// destructuring incoming data

const {id , car ,pic , model , maker , color ,price ,imgalt ,info , contact , category}=elem; 









function Contactseller(){

    return contact
    
    }

return(




<div className="item1 col-12 col-md-6  col-lg-4 col-xl-4">

<div className="row  item-inside">
<div className="col-12 col-md-12 col-lg-4 img-div ">

<img src={pic} alt={imgalt}  className="img-fluid" />

</div>





{/* menu-description */}

<div className="col-12 col-md-12 col-lg-8">


<div className="main-title pt-4 pb-3">

<h1>{car}</h1>
<p>{info}</p>
</div>

<div className="me">


<div className=" d-flex justify-content-around ">
<span>price:{price}</span>



<a href="tel:+" onClick={Contactseller} >
    <button className="btn btn-warning text-center" >
    
   
   
   contact-seller
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