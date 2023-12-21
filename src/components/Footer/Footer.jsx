import { Box, Text, Link } from '@chakra-ui/react';
import React from 'react';

export const Footer = () => {
  return (
    <Box
      as="footer"
      padding={'24px 32px'}
      textAlign={'center'}
      bgColor={'gray.400'}
    >
      <Text>
        &#169; 2023 | Developed by{' '}
        <Link
          fontWeight={'600'}
          bgColor={'blue.200'}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          href="https://github.com/NataliaMahera"
          target="_blank"
        >
          Natalia Mahera
        </Link>
      </Text>
    </Box>
  );
};
