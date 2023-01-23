// Import `extendTheme` from chakra-ui
import { extendTheme } from '@chakra-ui/react';

// `extendTheme` will create variables for ChakraUI
// We can then use these colors in components like following:
// <Box bg='brand.dark-blue'></Box>
const colorTheme = extendTheme({
  colors: {
    brand: {
      blue: '#083256',
      'dark-blue': '#09223d',
      turquoise: '#00caf4',
      'light-blue': '#184772',
      yellow: '#ffc600',
      white: '#d1deea',
    },
  },
});

export default colorTheme;
