import {useState} from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import axios from 'axios';

function UpdatedUser(){

  const {id} = useParams();
  const[name,setName] = useState();
  const[email,setEmail] = useState();
  const[address,setAddress] = useState();
  const navigate = useNavigate();

  const UpdateUser = (e) =>{
    e.preventDefault();
    axios.put(`https://backend-112.onrender.com/api/user/update/${id}`,{name,email,address})
    .then(result=>{
      navigate('/');
    })
    .catch(err=>{console.log(err)})
  }


  return(
    <div>
      <form onSubmit={UpdateUser}>
          <label>name</label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
          <label>email</label>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
          <label>address</label>
          <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
          <button>update</button>
       </form>
    </div>
  )
}
export default UpdatedUser;