import { Box, Flex } from '@chakra-ui/react';
import Bounty from '../bounty/bounty';
// eslint-disable-next-line import/no-extraneous-dependencies

function Bounties(): JSX.Element {
  return (
    <Flex align='center' justify='center'>
      <Box
        bg='#184772'
        maxW='80%'
        p={4}
        mt={14}
        ml={4}
        mb={4}
        borderRadius='5'
        color='white'
        alignContent='center'
        boxShadow='2xl'>
        All bounties
        <Bounty />
        <Bounty />
        <Bounty />
      </Box>
    </Flex>
  );
}

export default Bounties;
