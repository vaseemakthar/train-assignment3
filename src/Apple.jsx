// import {Component} from "react";

// class Apple extends Component{
//   render(){
//     return(
//       <>
//          <h1 className="a">this is apple</h1>
//       </>
      
//     )
//   }
// }

// export default Apple;

import {useState} from "react";

function Apple()
{
  let[name,setName]=useState("mass");
  let[count,setCount]=useState(0);
  return(
    <>
    <div>
        <button onClick={()=> setCount(count+1)}>++</button>
        <h2>count: {count}</h2>
        <button onClick={()=> setCount(count-1)}>--</button>
    </div>
        
        <input type="text" onChange={(event)=> setName(event.target.value)}/>
        <h1>This name: {name}</h1>
    </>
    
  )
}

export default Apple;