import './css/app.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Bounty from './pages/Bounty';

// import Login from './pages/login/login';
import SignUp from './pages/signUp/signUp';
import Profile from './pages/profile/profile';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/bounties' element={<Bounty />} />
      {/* <Route path='/' element={<Login />} /> */}
      <Route path='/signup' element={<SignUp />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
}

export default App;
