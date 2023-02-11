import React from 'react';
import { BountyProps } from '../../../types/bountyType';

interface BountyCardProps {
  bounty: BountyProps;
}

function BountyCard({ bounty }: BountyCardProps) {
  const { level, price, ques } = bounty;
  return (
    <div>
      <div className='level'>{level}</div>
      <div className='question'>
        <p>{ques}</p>
        <h5>{price}</h5>
      </div>
      <div className='answers'></div>
    </div>
  );
}

export default BountyCard;
