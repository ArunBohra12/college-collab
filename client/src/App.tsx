import './app.css';
import Bounties from './components/bounties/bounties';
import Navbar from './components/navbar/navbar';

function App(): JSX.Element {
  return (
    <div className='app'>
      <Navbar />
      <Bounties />
    </div>
  );
}

export default App;
