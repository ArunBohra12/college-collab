import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='nav'>
      <div className='logo'>
        <h1>CollabKr</h1>
      </div>
      <ul>
        <li>
          <Link to='/events'>Events</Link>
        </li>
        <li>
          <Link to='/bounties'>Bounties</Link>
        </li>
        <li>
          <Link to='/notes'>Notes</Link>
        </li>
        <li>
          <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' alt='' />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
