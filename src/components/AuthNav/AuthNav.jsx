import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as NavLink } from 'react-router-dom';

// Компонент AuthNav відповідає за навігаційну панель для неаутентифікованого користувача
const AuthNav = () => {
  return (
    <Box>
      <Flex
        direction={['row']}
        alignItems={'center'}
        gap={['14px', '14px', '40px', '40px']}
      >
        <Box>
          <Link as={NavLink} to="/register">
            Sign Up
          </Link>
        </Box>
        <Box>
          <Link as={NavLink} to="/login">
            Log In
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthNav;
