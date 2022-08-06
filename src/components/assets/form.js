import React from "react"
import './form.css';
 
const Popup = props =>{
return (

  <div id="form"> 
  <div className="box
  "> 



      <h1 className="hello">just a good thing</h1>
      {props.content}

  </div>
   </div>
)


}
export default Popup;
