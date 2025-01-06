import {useState} from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import axios from 'axios';
import "./update.css"

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
    <div className="form-container">
  <form className="form" onSubmit={UpdateUser}>
    <div className="form-group">
      <label className="form-label" htmlFor="name">Name</label>
      <input 
        id="name" 
        type="text" 
        className="form-input" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
    </div>
    <div className="form-group">
      <label className="form-label" htmlFor="email">Email</label>
      <input 
        id="email" 
        type="text" 
        className="form-input" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
    </div>
    <div className="form-group">
      <label className="form-label" htmlFor="address">Address</label>
      <input 
        id="address" 
        type="text" 
        className="form-input" 
        value={address} 
        onChange={(e) => setAddress(e.target.value)} 
      />
    </div>
    <button className="form-button">Update</button>
  </form>
</div>

  )
}
export default UpdatedUser;