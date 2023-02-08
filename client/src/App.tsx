import { Route, Routes } from 'react-router-dom';

import Login from './pages/login/login';
import SignUp from './pages/signUp/signUp';

import './css/app.css';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
}

export default App;
