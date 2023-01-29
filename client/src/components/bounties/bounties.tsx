import { Box, Flex } from '@chakra-ui/react';
import Bounty from '../bounty/bounty';
// eslint-disable-next-line import/no-extraneous-dependencies

function Bounties(): JSX.Element {
  return (
    <Flex align='center' justify='center'>
      <Box
        // bg='#BEE3F8'
        maxW='80%'
        p={4}
        mt={14}
        ml={4}
        mb={4}
        borderRadius='5'
        color='white'
        alignContent='center'
        borderRight={1}
        borderLeft={0}
        borderRightColor='black'
        borderRightWidth='10rem'
        // boxShadow='2xl'
      >
        All bounties
        <Bounty />
        <Bounty />
        <Bounty />
      </Box>
    </Flex>
  );
}

export default Bounties;
