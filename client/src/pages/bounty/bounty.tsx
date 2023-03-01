/* eslint-disable no-console */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import BountyCard from '../../components/bountyComp/bountyCard/BountyCard';
import PostBounty from '../../components/bountyComp/postBounty/PostBounty';
import './bounty.css';
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
      <div className='bounty-main'>
        <PostBounty />
        {/* {bounties.map((bounty) => {
          return (
            <div key={bounty.id}>
              <BountyCard bounty={bounty} />;
            </div>
          );
        })} */}
        <h2 className='Bounties-heading'>Bounties</h2>
        <BountyCard />
      </div>
    </div>
  );
}

export default Bounty;
