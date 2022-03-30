import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const mqBox = {
  '@media screen and (max-width: 834px)': {
    justifyContent: 'center',
  },
  '@media screen and (max-width: 320px)': {
    height: '257px',
  },
};
const mqText = {
  '@media screen and (max-width: 834px)': {
    marginInline: '172px',
    paddingInline: '0px',
    textAlign: 'center',
  },
  '@media screen and (max-width: 320px)': {
    marginInline: '23.5px',
    width: '273px',
    fontSize: '24px',
    lineHeight: '36.46px',
    paddingTop: '98px',
  },
};

function Banner() {
  return (
    <Box display="flex" bgImage="url('/images/cinema.jpg')" bgSize="cover" bgPosition="center" h="550px" w="100%" sx={mqBox}>
      <Text w="490px" paddingLeft="77px" paddingTop="109px" color="white" fontSize="72px" fontWeight="700" lineHeight="94px" letterSpacing="-0.05em" sx={mqText}>
        Watch Something Incredible
      </Text>
    </Box>
  );
}

export default Banner;
