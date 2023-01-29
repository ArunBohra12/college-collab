import { Box, Button, FormLabel, Heading, Input, Spacer, Textarea } from '@chakra-ui/react';
import { useState } from 'react';
// import './notes.css';

function Notes(): JSX.Element {
  const [uploadedFiles, setUploadedFiles] = useState<FileList[]>([]);

  const handleFileInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      setUploadedFiles([e.currentTarget.files]);
    }

    console.log(uploadedFiles);
  };

  return (
    <Box bg=' #EBF8FF' w='min(90vw,600px)' m='auto' mt='100px' p='20px' boxShadow='2xl'>
      <Heading as='h2' size='xl' justifyContent='center' display='flex' mb={5} mt={5}>
        Upload pdf
      </Heading>
      <form>
        <Box display='grid' gap='4rem'>
          <FormLabel
            htmlFor='notes-input'
            borderRadius={10}
            display='flex'
            justifyContent='center'
            alignItems='center'
            className='file'
            border='1px'
            borderColor='#ffc600'
            minHeight='10rem'>
            Select File
          </FormLabel>
          <Input type='file' id='notes-input' className='file-input' display='none' onChange={handleFileInput} />
          <Box gap='5' justifyContent='center'>
            <Heading as='h2' size='md' mb={1} mt={1}>
              Title:
            </Heading>
            <Input borderRadius='10' type='text' placeholder='Title' p={8} pl={10} pr={10} />
          </Box>
          <Box mt={2} gap='5'>
            <Heading as='h2' size='md' mb={1} mt={1}>
              About
            </Heading>
            <Textarea rows={5} cols={40} borderRadius='10' w='100%' placeholder='about topic' />
          </Box>
          <Box display='flex' justifyContent='center' mt={10}>
            <Button color='black' colorScheme='blue' bg='#ffc600'>
              upload
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
}

export default Notes;
