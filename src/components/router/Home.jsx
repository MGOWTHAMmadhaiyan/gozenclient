import React from 'react';
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <h1>USER LOGEDIN SUCCESSFULLY</h1>
      <h3>Welcome to the Home Page!</h3>
      <nav><Link to="/about">about</Link><br></br>
      <Link to="/contact">contact</Link></nav>

    </div>
  );
};

export default Home;
