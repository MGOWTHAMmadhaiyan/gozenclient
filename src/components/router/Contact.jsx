// Contact.js
import React from 'react';
import {Link} from 'react-router-dom'


const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <p>Reach out to us via the Contact Page!</p>
      <nav><Link to="/home">home</Link><br></br>
      <nav><Link to="/about">about</Link></nav>
      </nav>

    </div>
  );
};

export default Contact;
