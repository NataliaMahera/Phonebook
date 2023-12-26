import { Card, CardHeader, Heading } from '@chakra-ui/react';
import React from 'react';

const CardContainer = ({ children }) => {
  return (
    <Card
      margin={'auto'}
      align="center"
      variant="filled"
      w={['100vw', 400, 500]}
      p={5}
      colorScheme={'brand'}
      borderRadius="lg"
    >
      <CardHeader>
        <Heading
          fontSize={{ base: '24px', md: '26px', lg: '30px' }}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontWeight="bold"
        >
          Phonebook
        </Heading>
      </CardHeader>
      {children}
    </Card>
  );
};

export default CardContainer;
