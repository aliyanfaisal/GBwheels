import React from "react";
import "./Shop.css";
import Footer from "./footer";
import pic1  from "../img/caro1.jpg"
import pic2 from "../img/cars.jpg"
import pic3 from "../img/testimonial.jpg"

const Shop = ()=>{

return(
   <React.Fragment>
   
   <div id="shop" >



<h1> SHOP </h1>

</div>
<div id="cards">


            <div className="card">
                <img src={pic1} alt="pic1" srcset="" />
                
                <h2>corolla <span>g3</span> </h2>
{/* <i className="fab fa-facebook fa-2x">hellow</i> */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, possimus.</p>
            </div>
            <div className="card">
                <img src={pic2} alt="pic2" srcset="" />
                <h2>corolla <span>g3</span> </h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, possimus.</p>
            </div>
            <div className="card">
                <img src={pic3} alt="pic3" srcset="" />
                <h2>corolla <span>g3</span> </h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, possimus.</p>
            </div>



</div>



        <Footer />
    </React.Fragment>
)





}
export default Shop;