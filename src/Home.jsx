// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/user/123">Go to User 123's Profile</Link>
    </div>
  );
};

export default Home;
