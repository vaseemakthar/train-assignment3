// import Stomach from '.Stomach/.jsx';
import { useContext } from "react";
import { nameContext } from "./App";
function Stomach()
{
  
  let {color,bg} = useContext(nameContext)

  return(
    <div>
      <h1 style={{backgroundColor:bg,color:color}}>This is Stomach</h1>
      {/* <button> hello</button> */}
      {/* <Stomach need={name}/> */}
    </div>
    
  )
}

export default Stomach;