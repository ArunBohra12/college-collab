import { Box, Button, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { useState } from 'react';
// import './notes.css';
import { FaCloudUploadAlt } from 'react-icons/fa';

function Notes(): JSX.Element {
  const [uploadedFiles, setUploadedFiles] = useState<FileList[]>([]);

  const handleFileInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      setUploadedFiles([e.currentTarget.files]);
    }

    console.log(uploadedFiles);
  };

  return (
    <Box w='min(90vw,500px)' m='auto' mt='9rem'>
      <form>
        <Box justifyContent='center'>
          <Input borderRadius='1rem' type='text' placeholder='Title' p='2rem' pl='1.5rem' pr='1.5rem' />
        </Box>
        <Box mt='2rem'>
          <Textarea
            borderRadius='1rem'
            placeholder='Summary for the notes'
            height='13rem'
            resize='none'
            p='2rem'
            pl='1.5rem'
            pr='1.5rem'
          />
        </Box>
        <Box mt='2rem' display='grid'>
          <FormLabel
            htmlFor='notes-input'
            borderRadius='1rem'
            display='grid'
            justifyItems='center'
            className='file'
            border='2px'
            borderColor='#BABACC'
            borderStyle='dashed'
            minHeight='10rem'
            width='100%'
            p='2rem'>
            <FaCloudUploadAlt size='15rem' color='lightgray' />
            Upload Files(PDF only)
          </FormLabel>
          <Input type='file' id='notes-input' className='file-input' display='none' onChange={handleFileInput} />
        </Box>

        <Button colorScheme='blue' bg='#D55161' mt={10} w='100%' p={8} fontSize='2xl' color='white' mb={5}>
          Upload
        </Button>
      </form>
    </Box>
  );
}

export default Notes;
