import { Box, Button, Heading, Input, Textarea } from '@chakra-ui/react';
import React from 'react';
// import './notes.css';

function Notes() {
  return (
    <Box bg=' #09223d' ml='25%' mr='25%' pt={5} pb={5} mt={20} boxShadow='2xl'>
      <Heading as='h2' size='xl' justifyContent='center' display='flex' mb={5} mt={5}>
        Upload pdf
      </Heading>
      <form>
        <Box
          borderRadius={10}
          ml='10%'
          mr='10%'
          justifyContent='center'
          textAlign='center'
          className='file'
          border='1px'
          borderColor='#ffc600'
          pb={40}>
          <Input type='file' className='file-input' opacity='0' pt={40} display='flex' justifyContent='center' />
          Select File
        </Box>
        <Box mt={2} gap='5' justifyContent='center' display='grid'>
          <Heading as='h2' size='md' mb={1} mt={1}>
            Title:
          </Heading>
          <Input borderRadius='10' type='email' w='100%' placeholder='Email' p={8} pl={10} pr={10} width='3xl' />
        </Box>

        <Box mt={2} gap='5' justifyContent='center' display='grid'>
          <Heading as='h2' size='md' mb={1} mt={1}>
            About
          </Heading>
          <Textarea
            rows={5}
            cols={40}
            borderRadius='10'
            w='100%'
            placeholder='about topic'
            p={8}
            pl={10}
            pr={10}
            width='3xl'
          />
        </Box>

        <Box display='flex' justifyContent='center' mt={10}>
          <Button color='black' colorScheme='blue' bg='#ffc600'>
            upload
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Notes;
