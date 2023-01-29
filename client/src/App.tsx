import Navbar from './components/navbar/navbar';
import Notes from './components/notes/notes';

import './app.css';

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
