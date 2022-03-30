import React from 'react';
import {
  Flex, Input, Text,
} from '@chakra-ui/react';

function SearchBar({ setSearchValue, searchValue }: {
  setSearchValue: () => void,
  searchValue: string}) {
  return (
    <Flex
      direction="column"
      p="0px"
      h="89px"
      maxW="1306px"
      marginTop="63px"
      marginLeft="77px"
      marginRight="57px"
      marginBottom="48px"
      sx={{
        '@media screen and (max-width: 834px)': {
          marginInline: '77px',
        },
        '@media screen and (max-width: 320px)': {
          marginTop: '56px',
          marginInline: '27.5px',
          maxWidth: '265px',
        },
      }}
    >
      <Text
        display="flex"
        alignItems="center"
        h="fit-content"
        w="fit-content"
        fontSize="24px"
        lineHeight="31px"
        sx={{
          '@media screen and (max-width: 320px)': {
            fontSize: '16px',
            lineHeight: '21px',
          },
        }}
      >
        Search
      </Text>
      <Input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        w="100%"
        h="54px"
        marginTop="4px"
        border="1px solid #000000 !important"
        borderRadius="0px"
        sx={{
          '@media screen and (max-width: 320px)': {
            height: '34px',
          },
        }}
      />
    </Flex>
  );
}

export default SearchBar;
