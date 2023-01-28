import './app.css';
import Bounties from './components/bounties/bounties';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import Notes from './components/notes/notes';
import SignUp from './components/signup/signup';

function App(): JSX.Element {
  return (
    <div className='app'>
      <Navbar />
      {/* <Bounties /> */}
      <Notes />
      {/* <Login /> */}
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
