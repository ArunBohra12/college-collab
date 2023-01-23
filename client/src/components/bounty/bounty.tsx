import { Badge, Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import { BsChatRightFill } from 'react-icons/bs';

function Bounty(): JSX.Element {
  return (
    <Box bg='#083256' p={2} borderRadius='5' boxShadow='lg' mt={4}>
      <Flex mr={2}>
        <Badge borderRadius='full' px='2' colorScheme='white' bg='#184772'>
          <Heading as='h4' size='md'>
            easy
          </Heading>
        </Badge>
        <Spacer />

        <BsChatRightFill />
        <Badge borderRadius='full' px='2' colorScheme='white' bg='#184772' ml={2}>
          <Heading as='h4' size='md'>
            9 days left
          </Heading>
        </Badge>
      </Flex>
      <Badge borderRadius='full' px='2' colorScheme='white' bg='#184772'>
        <Heading as='h4' size='md'>
          5 crd
        </Heading>
      </Badge>

      <h4>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five centuries,{' '}
      </h4>
      <Badge borderRadius='full' px='2' colorScheme='white' bg='#184772'>
        <Heading as='h4' size='md'>
          PowerPoint
        </Heading>
      </Badge>
    </Box>
  );
}

export default Bounty;
