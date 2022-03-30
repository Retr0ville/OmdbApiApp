import React from 'react';
import { Box } from '@chakra-ui/react';

const mqBox = {
  '@media screen and (max-width: 834px)': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '@media screen and (max-width: 320px)': {
    height: '67px',
  },
};
const mqBoxText = {
  '@media screen and (max-width: 834px)': {
    position: 'static',
  },
  '@media screen and (max-width: 320px)': {
    height: '33.58px',
    width: '108px',
  },
};

function Header() {
  return (
    <Box width="100%" h="140px" bg="#292929" sx={mqBox}>
      <Box position="absolute" top="40px" left="77px" display="flex" alignItems="center" justifyContent="center" w="193px" h="60px" border="1px solid white" sx={mqBoxText}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
          fontSize="2rem"
          fontFamily="serif"
          sx={{
            '@media screen and (max-width: 320px)': {
              fontSize: '1rem',
              height: '18.43px',
              width: '87.68px',
            },
          }}
        >
          MyTestApp
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
