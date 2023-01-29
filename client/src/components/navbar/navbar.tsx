import { Box, Button, ButtonGroup, Flex, Spacer } from '@chakra-ui/react';

function Navbar(): JSX.Element {
  return (
    <Box bg='white' mt={-2} pt={4} pb={4} color='#003472' boxShadow='2xl'>
      <Spacer />
      <Flex minWidth='max-content' justifyContent='flex-end' mt={2} ml={2} mr={2} gap='10rem'>
        <Flex gap='10rem'>
          <h3>Notes</h3>
          <h3>Bounties</h3>
          <h3>Events</h3>
        </Flex>
        <ButtonGroup gap='2'>
          <Button colorScheme='blue' bg='#003472' color='white'>
            Sign Up
          </Button>
          <Button colorScheme='blue' bg='#003472' color='white'>
            Log in
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}

export default Navbar;
// function Login(): JSX.Element {
