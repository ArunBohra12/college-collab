import React from 'react';
import { Avatar, Box, Button, ButtonGroup, Flex, Spacer } from '@chakra-ui/react';
import { FaCoins } from 'react-icons/fa';

function NavbarLoggedOut(): JSX.Element {
  return (
    <Box bg='#40415A' color='#FFFFFF' boxShadow='xl'>
      <Spacer />
      <Flex
        minWidth='max-content'
        justifyContent='flex-end'
        alignItems='center'
        gap='8rem'
        fontSize='2rem'
        h='8rem'
        px='5rem'>
        <h3>Bounties</h3>
        <h3>Events</h3>
        <h3>Notes</h3>
        <h3>Log in</h3>
        <Button colorScheme='blue' bg='#F99A66' w='8rem' h='2.5rem' color='white' boxShadow='lg' borderRadius='6px'>
          Signup
        </Button>
      </Flex>
    </Box>
  );
}

export default NavbarLoggedOut;
// function Login(): JSX.Element {
