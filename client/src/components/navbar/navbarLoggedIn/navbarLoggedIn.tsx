import React from 'react';
import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navbarLoggedIn.css';

function NavbarLoggedIn() {
  return (
    <div className='navbarLO'>
      <div className='logo'>logo</div>
      <div className='links-button'>
        <Link to='/bounties' className='nav-links'>
          Bounties
        </Link>
        <Link to='/' className='nav-links'>
          Events
        </Link>
        <Link to='/' className='nav-links'>
          Notes
        </Link>
        <Link to='/' className='nav-links'>
          175 <FaCoins />
        </Link>
        <Link to='/profile'>
          <img className='avatar' src='https://avatars.githubusercontent.com/u/97244608?v=4' alt='' />
        </Link>
        {/* <FaUserCircle className='avatar' href='https://avatars.githubusercontent.com/u/97244608?v=4' /> */}
      </div>
    </div>
  );
}

export default NavbarLoggedIn;
