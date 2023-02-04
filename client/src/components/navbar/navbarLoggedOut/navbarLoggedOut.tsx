import React from 'react';
import { Link } from 'react-router-dom';
import './navbarLoggedOut.css';

function NavbarLoggedOut() {
  return (
    <div className='navbarLO'>
      <div className='logo'>logo</div>
      <div className='links-button'>
        <Link to='/' className='nav-links'>
          Bounties
        </Link>
        <Link to='/' className='nav-links'>
          Login
        </Link>
        <Link to='/' className='nav-links'>
          Events
        </Link>
        <Link to='/' className='nav-links'>
          Notes
        </Link>
        <button type='button' className='nav-signup'>
          SignUp
        </button>
      </div>
    </div>
  );
}

export default NavbarLoggedOut;
