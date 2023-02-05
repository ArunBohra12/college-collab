import './css/app.css';
import NavbarLoggedOut from './components/navbar/navbarLoggedOut/navbarLoggedOut';

import NotesUpload from './pages/notesUpload/notesUpload';
import NavbarLoggedIn from './components/navbar/navbarLoggedIn/navbarLoggedIn';

function App(): JSX.Element {
  return (
    <div className='app'>
      {/* <NavbarLoggedOut /> */}
      <NavbarLoggedIn />
      {/* <Login /> */}
      {/* <SignUp /> */}
      <NotesUpload />
    </div>
  );
}

export default App;
