import './css/app.css';
import NavbarLoggedIn from './components/navbar/navbarLoggedIn/navbarLoggedIn';
import Notes from './pages/notes/notes';

function App(): JSX.Element {
  return (
    <div className='app'>
      {/* <NavbarLoggedOut /> */}
      <NavbarLoggedIn />
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <NotesUpload /> */}
      <Notes />
    </div>
  );
}

export default App;
