import React, { useState } from 'react';
import Input from '../../input/input';
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
    <form className='post-bounty-main'>
      <h2 className='heading-post'>Post a Bounty</h2>

      <div className='post-bounty-text'>
        <textarea
          name='ques'
          id=''
          placeholder='Place a bounty'
          cols={150}
          rows={7}
          value={bounty?.ques}
          onChange={(e) => bountyHandler(e)}
        />
      </div>
      <div className='post-container'>
        <div className='price'>
          <h4>price</h4>

          <input
            type='number'
            name='price'
            id=''
            value={bounty?.price}
            onChange={(e) => bountyHandler(e)}
            className='price-input'
          />
          {/* <Input
              otherInputAttributes={{
                type: 'number',
                value: bounty?.price,
                onChange: (e) => bountyHandler(e),
                // onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('name', e.target.value),
              }}
            /> */}
        </div>
        <div className='difficulty'>
          <div className='easy'>
            <h5>Easy</h5>
            <input
              type='radio'
              id=''
              value='easy'
              checked={bounty?.level === 'easy'}
              onChange={(e) => bountyHandler(e)}
            />
          </div>

          <div className='medium'>
            <h5>Medium</h5>
            <input
              type='radio'
              id=''
              value='medium'
              checked={bounty?.level === 'medium'}
              onChange={(e) => bountyHandler(e)}
            />
          </div>

          <div className='hard'>
            <h5>hard</h5>
            <input
              type='radio'
              id=''
              value='hard'
              checked={bounty?.level === 'hard'}
              onChange={(e) => bountyHandler(e)}
            />
          </div>
        </div>
        <button className='post-bounty-btn' type='submit'>
          Post
        </button>
      </div>
    </form>
  );
}

export default PostBounty;
