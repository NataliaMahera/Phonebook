import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import { Link as NavLink } from 'react-router-dom';

const WelcomeCard = () => {
  return (
    <Card
      margin={'auto'}
      align="center"
      variant="filled"
      w={['100vw', 400, 500]}
      p={5}
      bg="gray.50"
      borderRadius="lg"
      borderColor="gray.100"
    >
      <CardHeader>
        <Heading
          fontSize={{ base: '24px', md: '24px', lg: '32px' }}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontWeight="bold"
        >
          Welcome to Phonebook!
        </Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Summary
            </Heading>
            <Text pt="2" fontSize="sm">
              Phonebook is a user-friendly application designed to organize your
              personal phonebook. You can store, manage, and quickly find all
              your contacts.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Overview
            </Heading>
            <Text pt="2" fontSize="sm">
              Visit the{' '}
              <Link
                fontWeight={'600'}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                as={NavLink}
                to="/register"
              >
                Sign Up
              </Link>{' '}
              or{' '}
              <Link
                fontWeight={'600'}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                as={NavLink}
                to="/login"
              >
                Log In
              </Link>{' '}
              page to create a new account or log in using your existing
              credentials. After successful login, you will be redirected to the
              Contact page. On the Contacts page, you can start creating your
              own phone book.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Analysis
            </Heading>
            <Text pt="2" fontSize="sm">
              If you have any questions or require further assistance, please
              don't hesitate to contact our{' '}
              <Link
                fontWeight={'600'}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                href="https://github.com/NataliaMahera"
                target="_blank"
              >
                Support team
              </Link>
              . Thank you for choosing Phonebook!
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default WelcomeCard;
