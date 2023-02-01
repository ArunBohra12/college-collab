// Import `extendTheme` from chakra-ui
import { extendTheme } from '@chakra-ui/react';

// `extendTheme` will create variables for ChakraUI
const theme = extendTheme({
  // We can use these colors in components like following:
  // <Box bg='brand.dark-blue'></Box>
  colors: {
    brand: {
      blue: '#083256',
      'dark-blue': '#09223d',
      turquoise: '#00caf4',
      'light-blue': '#184772',
      yellow: '#ffc600',
      white: '#ffffff',
    },
  },
  // We can then use these colors in components like following:
  // <Box bg='brand.dark-blue'></Box>
  fonts: {
    primary: `'Rajdhani', sans-serif`,
  },
});

export default theme;
