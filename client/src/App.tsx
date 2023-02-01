import './app.css';
import { ChakraProvider } from '@chakra-ui/react';

// import theme from './theme';
import NavbarLoggedin from './components/navbar/navbarloggedin';

import theme from './chakraUi/theme';

import Notes from './components/notes/notes';

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <div className='app'>
        <NavbarLoggedin />
        {/* <NavbarLoggedOut /> */}
        {/* <Bounties /> */}
        <Notes />
        {/* <Login /> */}
        {/* <SignUp /> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
