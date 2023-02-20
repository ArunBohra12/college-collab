/* eslint-disable no-console */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import BountyCard from '../../components/bountyComp/bountyCard/BountyCard';
import PostBounty from '../../components/bountyComp/postBounty/PostBounty';
// import Navbar from '../components/generalComp/Navbar/Navbar';
import NavbarLoggedIn from '../../components/navbar/navbarLoggedIn/navbarLoggedIn';
import { BountyProps } from '../../types/bountyType';

function Bounty() {
  const [bounties, setBounties] = useState<BountyProps[]>([]);

  const getBounties = async () => {
    const { data } = await axios.get('');
    setBounties(data);
    console.log(data);
  };

  useEffect(() => {
    getBounties();
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <NavbarLoggedIn />
      <div>
        <PostBounty />
        {bounties.map((bounty) => {
          return (
            <div key={bounty.id}>
              <BountyCard bounty={bounty} />;
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bounty;
