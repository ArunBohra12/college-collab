import React from 'react';
import { FaCoins } from 'react-icons/fa';
import { BountyProps } from '../../../types/bountyType';
import './bountyCard.css';

interface BountyCardProps {
  bounty: BountyProps;
}

// function BountyCard({ bounty }: BountyCardProps) {
function BountyCard() {
  // const { level, price, ques } = bounty;
  return (
    <div className='bounty-card-container'>
      {/* <div className='level'>{level}</div>
      <div className='question'>
        <p className='question-text'>{ques}</p>     
          <h5>
          {price}<FaCoins />
        </h5>
      </div>
      <div className='answers'>
        <h5>Answers</h5>
        <p>{answers}</p>
      </div> */}
      <div className='level-name'>
        <h5>medium</h5>
        <h5>Ayush</h5>
      </div>
      <div className='question'>
        <p className='question-text'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h5>
          10 <FaCoins />
        </h5>
      </div>
      {/* <div className='answers'>
        <h5>Answers</h5>
        <p>
          1. sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy
          text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        </p>
      </div> */}
    </div>
  );
}

export default BountyCard;
