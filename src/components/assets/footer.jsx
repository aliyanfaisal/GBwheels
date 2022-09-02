import React from "react";

import './footer.css'
import '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faCar, faCarSide } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {

    return (


        <div className='footer'>



            <div className="innerdiv">




                <div>
                    <h3>GB-Wheels</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint magnam, molestias culpa, ab distinctio possimus vero nemo commodi earum iusto soluta quod accusamus officia suscipit id eveniet labore consequuntur tenetur deleniti maxime?</p>

                </div>
                <div>

                    <h3>Addresss</h3>
                    <address>Gilgit city</address>
                    <h3>Phone</h3>
                    <label htmlFor="phone" type="integer">+923554300327</label>
                    <br />

                    <map name="Gilgit-city">Gilgit</map>
                    <h3>Social links</h3>

                    <FontAwesomeIcon icon={faCarSide} />
                    
                    <FontAwesomeIcon icon={faAddressBook} />
                    
                    <FontAwesomeIcon icon={faCar} />
<FontAwesomeIcon icon={faAddressBook}/>

                </div>
                <div>
                    <h3>Partners</h3>


                    <li>Greymatterventures (Gmv)</li>
                    <li>Mountainfolk</li>
                    <li>Northern-Hope</li>


                    <h3>Initiative</h3>


                    <li>Vehicle for all</li>
                    <li>Driving Folk</li>
                    <li>Wanderers things</li>


                </div>

            </div>
            <div></div>
            <span>powered by Greymatterventures @2022
            </span>

        </div>



    )


}
export default Footer;