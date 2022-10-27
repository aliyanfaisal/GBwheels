import React from "react";
import './footer.css'
import { SocialIcon } from "react-social-icons";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole} from "@fortawesome/free-solid-svg-icons";
import { faMobileAndroid } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {

    return (


        <div className='footer'>



            <div className="innerdiv">




                <div className="" >
                    <h2>GBWheels</h2>
                    <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci asperiores quas illo minima eum impedit, excepturi veniam odio dolorem eveniet dignissimos vitae magnam quibusdam saepe nisi error totam sunt autem veritatis ipsum corrupti fuga! Odit et deleniti cupiditate, ut id soluta cum sequi perspiciatis quis. Praesentium sequi perspiciatis blanditiis ab.</p>
                </div>
 


                <div id="otherstuff">
                    <h2>Partners</h2>
                    <hr />
                    <li><a href="http://greymatter.com">Greymatterventures (Gmv)</a></li>
                    <li><a href="http://stackoverflow.com">Old-folk</a> </li>
                    <li> <a href="http://ijlalansari.great-site.net/">Northern-Hope</a> </li>
<br />

<div>

<h4>Download our App</h4>
               
                        <hr/>
               <div id="Applinks">
                        
                        <FontAwesomeIcon icon={faAppleWhole} />
                        
                        <FontAwesomeIcon icon={faMobileAndroid}/>

                        </div>

</div>


     
                </div>

            </div>

           


<hr />

            
            <div id="social">
            <SocialIcon url="facebook.com/GBwheels" />

<SocialIcon url="twitter.com/GBwheels"  color="yellow"/>


<SocialIcon url="instagram.com/GBwheels" />






<NavLink exact activeClassName="active_class" id="link21" to="Terms">Terms and conditons</NavLink>
</div>
<hr />
<span>powered by Greymatterventures  @2022 all rights reserved

</span>

        </div>



    )


}
export default Footer;