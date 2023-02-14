import { Route, Routes } from 'react-router-dom';

import Login from './pages/login/login';
import SignUp from './pages/signUp/signUp';
import Notes from './pages/notes/notes';

import './css/app.css';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/notes' element={<Notes />} />
    </Routes>
  );
}

export default App;
