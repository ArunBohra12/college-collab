import React, { useState } from 'react';
import './PostBounty.css';

interface PostBountyProps {
  ques: string;
  level: string | 'medium';
  price: number;
}

function PostBounty() {
  const [bounty, setBounty] = useState<PostBountyProps>();

  const bountyHandler = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
    if (Array.isArray(bounty)) {
      setBounty({ ...bounty, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className='post-container'>
      <textarea
        name='ques'
        id=''
        placeholder='Place a bounty'
        value={bounty?.ques}
        onChange={(e) => bountyHandler(e)}
      />
      <input type='number' name='price' id='' value={bounty?.price} onChange={(e) => bountyHandler(e)} />
      <div className='difficulty'>
        <div className='easy'>
          <input
            type='radio'
            id=''
            value='easy'
            checked={bounty?.level === 'easy'}
            onChange={(e) => bountyHandler(e)}
          />
        </div>
      </div>
      <div className='difficulty'>
        <div className='medium'>
          <input
            type='radio'
            id=''
            value='medium'
            checked={bounty?.level === 'medium'}
            onChange={(e) => bountyHandler(e)}
          />
        </div>
      </div>
      <div className='difficulty'>
        <div className='easy'>
          <input
            type='radio'
            id=''
            value='hard'
            checked={bounty?.level === 'hard'}
            onChange={(e) => bountyHandler(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default PostBounty;
