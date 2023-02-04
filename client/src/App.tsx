import './css/app.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Bounty from './pages/Bounty';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/bounties' element={<Bounty />} />
    </Routes>
  );
}

export default App;
