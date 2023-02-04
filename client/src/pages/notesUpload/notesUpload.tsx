import Input from '../../components/input/input';
import './notesUpload.css';

function NotesUpload() {
  return (
    <div className='upload'>
      <div className='upload-content'>
        <div className='upload-heading'>
          <h1>Upload Notes</h1>
        </div>
        <form className='notes-input-upload'>
          <div className='notes-title'>
            <Input
              otherInputAttributes={{
                type: 'text',
                placeholder: 'Title',
              }}
            />
          </div>
          <div>
            <textarea placeholder='Summary for the notes' className='summary-input' rows={6} cols={70}></textarea>
          </div>
          <div className='notes-input'>
            <Input
              otherInputAttributes={{
                type: 'file',
              }}
            />
          </div>

          <button type='submit' className='notes-upload-button'>
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default NotesUpload;
