import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <Link to="/" class="brand-logo right">JH</Link>
          <ul id="nav-mobile" class="left hide-on-med-and-down">

            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/fs-portfolio">Full-Stack Portfolio</Link></li>
            <li><Link to="/resume">Resume</Link></li>



          </ul>
        </div>
      </nav>

    </div>
  );
};

export default Navbar