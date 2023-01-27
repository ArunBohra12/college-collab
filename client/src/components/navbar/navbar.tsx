import { Box, Button, ButtonGroup, Flex, Spacer } from '@chakra-ui/react';

function Navbar(): JSX.Element {
  return (
    <Box bg=' #09223d' mt={-2} pt={2} pb={4} color='white' boxShadow='2xl'>
      <Flex minWidth='max-content' mt={2} ml={2} mr={2}>
        <Flex gap='10rem'>
          <h3>nav</h3>
          <h3>nav</h3>
          <h3>nav</h3>
        </Flex>
        <Spacer />
        <ButtonGroup gap='2'>
          <Button colorScheme='blue' bg='#ffc600' color='#09223d'>
            Sign Up
          </Button>
          <Button colorScheme='blue' bg='#ffc600' color='#09223d'>
            Log in
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}

export default Navbar;
// function Login(): JSX.Element {
