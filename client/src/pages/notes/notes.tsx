import Input from '../../components/input/input';
import './notes.css';

function Notes() {
  return (
    <div className='notes'>
      <div className='search'>
        <Input
          otherInputAttributes={{
            type: 'text',
            placeholder: 'Search',
          }}
        />
      </div>
      <div className='all-notes'>
        <div className='note'>
          <h3>
            memory managment and deadlock memory managment and deadlockmemory managment and deadlockmemory managment and
            deadlockmemory managment and deadlockmemory managment and deadlockmemory managment and deadlock
          </h3>
          <button type='submit' className='notes-buy-btn'>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notes;
