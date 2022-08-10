import React ,{useState} from "react";
const Counter =()=>{


    let [count, setCount] = useState(2);

return(

<div>
    <p>The count is :{count}</p>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
</div>


)




} 
export default Counter;