import React from 'react';
import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navbarLoggedIn.css';

function NavbarLoggedIn() {
  return (
    <div className='navbarLO'>
      <div className='logo'>logo</div>
      <div className='links-button'>
        <Link to='/' className='nav-links'>
          Bounties
        </Link>
        <Link to='/' className='nav-links'>
          Events
        </Link>
        <Link to='/notes' className='nav-links'>
          Notes
        </Link>
        <Link to='/' className='nav-links'>
          175 <FaCoins />
        </Link>
        <img className='avatar' src='https://avatars.githubusercontent.com/u/97244608?v=4' alt='' />
      </div>
    </div>
  );
}

export default NavbarLoggedIn;
