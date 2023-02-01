import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';
import React from 'react';

import { FaEnvelope, FaLock } from 'react-icons/fa';

function Login(): JSX.Element {
  return (
    <Box bg='#40415A' display='flex' justifyContent='center' alignItems='center' textAlign='center' h='100%'>
      <Box w='min(90vw,440px)'>
        <form action=''>
          <Heading as='h2' size='4xl' color='white'>
            LOGIN
          </Heading>

          <Box
            mt='2rem'
            display='flex'
            justifyContent='center'
            alignItems='center'
            bg='#FFFFFF'
            p='1rem'
            px='2rem'
            borderRadius='1rem'>
            <FaEnvelope color='gray' size='15px' />
            <Input bg='#FFFFFF' border='none' type='email' placeholder='Email Address' focusBorderColor='transparent' />
          </Box>
          <Box
            mt='2rem'
            display='flex'
            justifyContent='center'
            alignItems='center'
            bg='#FFFFFF'
            p='1rem'
            px='2rem'
            borderRadius='1rem'>
            <FaLock color='gray' size='1.5rem' />
            <Input bg='#FFFFFF' border='none' type='password' placeholder='Password' focusBorderColor='transparent' />
          </Box>

          <Button colorScheme='blue' bg='#D55161' mt={10} w='100%' p={8} fontSize='2xl' color='white' mb={5}>
            Log in
          </Button>
          <Text color='white'>Forgot Password? | SignUp</Text>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
