import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './CreatedUser.css';
import axios from 'axios';

function CreatedUser(){
 const [name ,setName] = useState();
 const [email ,setEmail] = useState();
 const [address ,setAddress] = useState();
 const navigate = useNavigate();
 const submit = (e)=>{
  e.preventDefault();
  axios.post('https://backend-112.onrender.com/api/user/create',{name,email,address})
    .then(result=>{
      console.log(result.data);
      navigate('/');
    })
  
 }

  return(
    // <div>
    //   <form onSubmit={submit}>
    //   <label>name</label>
    //    <input type="text" onChange={(e)=>setName(e.target.value)}/><br/>
    //    <label>email</label>
    //    <input type="text" onChange={(e)=>setEmail(e.target.value)}/><br/>
    //    <label>address</label>
    //    <input type="text" onChange={(e)=>setAddress(e.target.value)}/>
    //    <button type="submit">create</button>
    //   </form>
      
    // </div>
    <div className="created-user-container">
      <form className="created-user-form" onSubmit={submit}>
        <h2 className="form-title">Create User</h2>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            className="form-input"
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Address</label>
          <input
            className="form-input"
            type="text"
            placeholder="Enter address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className="form-submit-button" type="submit">
          Create
        </button>
      </form>
    </div>
  )
}
export default CreatedUser;