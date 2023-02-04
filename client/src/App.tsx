import './css/app.css';
import NavbarLoggedOut from './components/navbar/navbarLoggedOut/navbarLoggedOut';

import NotesUpload from './pages/notesUpload/notesUpload';

function App(): JSX.Element {
  return (
    <div className='app'>
      <NavbarLoggedOut />
      {/* <Login /> */}
      {/* <SignUp /> */}
      <NotesUpload />
    </div>
  );
}

export default App;
