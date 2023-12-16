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
        gap={['12px', '12px', '32px', '32px']}
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
