import { Box, Button, Heading, Img, Input, Link, LinkBox, Text } from '@chakra-ui/react';
import React from 'react';
import './signup.css';

function SignUp() {
  return (
    <div>
      <Box display='flex'>
        <Img></Img>
        <Box className='login' mt={20} pl={10} pr={10} pb={10} mx='auto' boxShadow='2xl'>
          <Heading as='h2' size='xl' mb={5} mt={5}>
            Sign Up
          </Heading>
          <Box mt={5} gap='5'>
            <Heading as='h2' size='md' mb={5} mt={5}>
              Name:
            </Heading>
            <Input borderRadius='10' type='Text' w='100%' placeholder='Name' p={8} pl={10} pr={10} width='xl' />
          </Box>
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
            <Input borderRadius='10' type='password' w='100%' placeholder='password' p={8} pl={10} pr={10} width='xl' />
          </Box>
          <Button colorScheme='blue' bg='#ffc600' mt={10} width='xl' height={14} color='#09223d'>
            Sign Up
          </Button>
          <Text mt={5}>
            Already a user?
            <Link color='blue'> Login</Link>
          </Text>
        </Box>
      </Box>
    </div>
  );
}

export default SignUp;
