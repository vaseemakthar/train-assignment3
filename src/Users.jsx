import React, { useState , useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import './User.css';
const Users = () => {
    const [user, setUser] = useState([]);
    useEffect(()=>{
        axios.get('https://backend-112.onrender.com/api/user/fetch')
        .then((result)=>{
            setUser(result.data.users)
        })
    },[])

    const deleteUser = (id) =>{
        axios.delete(`https://backend-112.onrender.com/api/user/delete/${id}`)
        .then(()=>{
            console.log("user deleted");
            // fetch();
        })
        .catch(err => {console.log(err)})
    }

    return(
        <div className="users-container">
      <h1>Users</h1>
      <Link to="/create" className="create-user-link">Create User</Link>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((value) => (
            <tr key={value._id}>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.address}</td>
              <td>
                <Link to={`/update/${value._id}`} className="update-link">Update</Link>
                <button type="submit" onClick={()=>deleteUser(value._id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}

export default Users;
