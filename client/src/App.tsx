import { Route, Routes } from 'react-router-dom';

import SignUp from './pages/signUp/signUp';
import Login from './pages/login/login';
import Home from './pages/home/home';
import Bounty from './pages/bounty/bounty';
import Notes from './pages/notes/notes';
import Profile from './pages/profile/profile';

import './css/app.css';
import NotesUpload from './pages/notesUpload/notesUpload';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
      <Route path='/bounties' element={<Bounty />} />
      <Route path='/notes' element={<Notes />} />
      <Route path='/notesupload' element={<NotesUpload />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
}

export default App;
