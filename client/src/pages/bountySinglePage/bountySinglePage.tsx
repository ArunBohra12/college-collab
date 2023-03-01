import { FaCoins } from 'react-icons/fa';
import './bountySinglePage.css';

function BountySinglePage() {
  return (
    <div className='bounty-single-page-container'>
      <div className='bounty-details'>
        <div className='question'>
          Question:
          <p className='question-text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
          <div className='bounty-author-price-level'>
            <h4>
              Credits: 10 <FaCoins />
            </h4>

            <h4>
              level: <span>medium</span>{' '}
            </h4>
            <h4>
              Author: <span>Ayush</span>
            </h4>
          </div>
        </div>
      </div>
      <div className='all-answers'>
        <h3 className='answer-heading'>Answers</h3>
        <div className='answers'>
          <p>
            1. sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          </p>
          <h5>answered</h5>
        </div>
      </div>
    </div>
  );
}

export default BountySinglePage;
