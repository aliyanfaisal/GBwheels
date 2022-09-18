import React from "react";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Redirect, Route, Router, Switch } from "react-router-dom";
import "./product-card.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../footer";

function ProductCard({item}){

     

    return (
        <React.Fragment>


            {item.map((val)=>{

function contacts () {
    return val.contact;


    
}

return(

<div className="card">
            <div key={val.id}>
                <h2>{val.car}  </h2>
                <img src={val.pic} alt={val.imgalt} srcset="" />

                <hr />
                <p> {val.info}</p>

                <h4>Specifications</h4>
                <b>
                    <ul>
                        <li>{val.model}</li>
                        <li>{val.maker}</li>
                        <li>{val.color}</li>
                        <li>{val.price}</li>

                    </ul>
                </b>
                <hr />








                    <button type="submit" id="addtocart" ><a href="tel:" onClick={contacts}>Contact-Seller <FontAwesomeIcon icon={faSquarePhone}/></a>  </button>


                    </div>





        
        </div>
       )     })}
 
        </React.Fragment>
    )
}

export default ProductCard;