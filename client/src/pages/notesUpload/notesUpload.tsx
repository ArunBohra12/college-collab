import { useState } from 'react';
import Input from '../../components/input/input';
import './notesUpload.css';

function NotesUpload() {
  const [notesFile, setNotesFile] = useState<File | null>(null);
  const [notesTitle, setNotesTitle] = useState<string>('');
  const [notesSummary, setNotesSummary] = useState<string>('');

  const handleFilesUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files || !e.target.files[0]) return;
    setNotesFile(e.target.files[0]);
  };
  // const handleFilesSubmit = async (e: React.FormEvent<HTMLFormElement>) => {};
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
                placeholder: 'title',
                value: notesTitle,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => setNotesTitle(e.target.value),
              }}
            />
          </div>
          <div>
            <textarea
              placeholder='Summary for the notes'
              className='summary-input'
              rows={6}
              cols={70}
              value={notesSummary}
              onChange={(e) => setNotesSummary(e.target.value)}></textarea>
          </div>
          <div className='notes-input'>
            <Input
              otherInputAttributes={{
                type: 'file',
                accept: 'pdf',
                onChange: handleFilesUpload,
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
