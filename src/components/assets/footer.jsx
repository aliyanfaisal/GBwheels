import React from "react";
import './footer.css'
import { SocialIcon } from "react-social-icons";

const Footer = () => {

    return (


        <div className='footer'>



            <div className="innerdiv">




                <div >
                    <h2>GB-Wheels</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci asperiores quas illo minima eum impedit, excepturi veniam odio dolorem eveniet dignissimos vitae magnam quibusdam saepe nisi error totam sunt autem veritatis ipsum corrupti fuga! Odit et deleniti cupiditate, ut id soluta cum sequi perspiciatis quis. Praesentium sequi perspiciatis blanditiis ab.</p>
                </div>
                <div id="address">

                    <h3>Addresss</h3>
                    <address >Gilgit city</address>
                    <h3>Phone</h3>
                    <label htmlFor="phone" type="integer">+923554300327</label>
                    <br />

<div style={{padding:'10px 4px'}}>

                        <h3>Social links</h3>


<div id="social">

                        <SocialIcon url="facebook.com" />

                        <SocialIcon url="twitter.com" />


                        <SocialIcon url="instagram.com" />


                        </div></div>


                </div>
                <div id="otherstuff">
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

<hr />
            <span>powered by Greymatterventures @2022 all rights reserved
            </span>

        </div>



    )


}
export default Footer;