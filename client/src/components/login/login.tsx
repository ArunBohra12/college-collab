import { Box, Button, Heading, Img, Input } from '@chakra-ui/react';
import React from 'react';
import './login.css';

function Login(): JSX.Element {
  return (
    <div>
      <Box display='flex'>
        <Img></Img>

        <Box className='login' mt={20} pl={10} pr={10} pb={10} mx='auto' boxShadow='2xl'>
          <form action=''>
            <Heading as='h2' size='xl' mb={5} mt={5}>
              Login
            </Heading>
            <Box mt={5} gap='5'>
              <Heading as='h2' size='md' mb={5} mt={5}>
                Email:
              </Heading>
              <Input borderRadius='10' type='email' w='100%' placeholder='Email' p={8} pl={10} pr={10} width='xl' />
            </Box>
            <Box mt={5} gap='5'>
              <Heading as='h2' size='md' mb={5} mt={5}>
                password:
              </Heading>
              <Input
                borderRadius='10'
                type='password'
                w='100%'
                placeholder='password'
                p={8}
                pl={10}
                pr={10}
                width='xl'
              />
            </Box>
            <Button colorScheme='blue' bg='#ffc600' mt={10} width='xl' height={14} color='#09223d'>
              Log in
            </Button>
          </form>
        </Box>
      </Box>
    </div>
  );
}

export default Login;
