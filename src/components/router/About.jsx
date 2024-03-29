import React from 'react';
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>This is the About Page!</p>
      <nav><Link to="/home">home</Link><br></br>
      <nav><Link to="/contact">contact</Link></nav>
      </nav>
    </div>
  );
};

export default About;
