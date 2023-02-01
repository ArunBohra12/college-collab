import React from 'react';
import { Avatar, Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { FaCoins } from 'react-icons/fa';

function NavbarLoggedin(): JSX.Element {
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
        <Text>Bounties</Text>
        <Text>Events</Text>
        <Text>Notes</Text>

        <Box display='flex' gap='1rem' alignItems='center'>
          175
          <FaCoins />
        </Box>
        <Avatar name='Dan Abrahmov' src='https://avatars.githubusercontent.com/u/97244608?v=4' />
      </Flex>
    </Box>
  );
}

export default NavbarLoggedin;
// function Login(): JSX.Element {
