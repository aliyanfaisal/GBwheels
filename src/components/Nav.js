import React from "react";
// import  "../../src/components/Nav"
import   "./Nav.css"
// import logo from '../img/logo.svg'
import "react-bootstrap"
function  Nav() {
    return(
<div className="menu"> 
{/* <img src="../img/logo.svg" alt="" width={'20px'} ./> */}

<nav>
    
     <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#form'>About</a></li>
          <li><a href='#gallery'>Blog</a></li>
          <li><a href='#service'>Service</a></li>
          </ul>
          </nav>     
</div>
     
    )


}
export default Nav;