import Egg from './Egg.jsx';
function Hen({name})
{ 
  return(
    <div>
      <h1>This is Hen</h1>
      <Egg  name={name}/>
    </div>
    
  )
} 
export default Hen;