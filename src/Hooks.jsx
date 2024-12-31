import {useState,useRef} from 'react';

function Hooks(){
  let[Count, setCount] = useState(0);

  let countRef =useRef(0);
  let increament = (e)=>{
    // setCount(Count+1);
    console.log("ref:",e.target.value);
  }
  // useEffect(()=>{
  //   console.log("Value updated");
  // },[Count])

  return(
    <div>
       <h1>Count: {Count}</h1>
       <input type="text" onChange={(e)=>increament(e)}/>
       {/* <p>read:{increament}</p> */}
        {/* <button onClick={increament}>Increament</button> */}
        {/* <button onClick={()=> setCount(Count+1)}>Increament</button>
        <button onClick={()=> setCount(Count-1)}>Decreament</button> */}
    </div>
  )

}

export default Hooks;