import React from "react";

function ProductCard(product){
    return (
        <React.Fragment>
        <div className="card">
            <img src={product.url} alt="pic1" srcset="" />

            <div>
                <h2>{product.name} <span>Gl4</span> </h2>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, possimus.
                </p>

                <h4>Specifications</h4>
                <b>
                    <ol>
                        <li>Model:<span>2021</span></li>
                        <li>Enginee: 400hp</li>
                        <li>Mileage:20012</li>
                        <li>Color:yellow , black , white</li>

                    </ol>
                </b>
                <span>Rating:<FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>
                <h5>Price:20.4 lacs</h5>
                <hr />
                <NavLink exact activeClassName="active_class" id="link1" to="/Cart">
                    <button type="submit" id="addtocart">Contact-Seller <FontAwesomeIcon icon={faSquarePhone} /></button>

                </NavLink>              </div>
        </div>
 
        </React.Fragment>
    )
}

export default ProductCard;