import { Link as NavLink } from 'react-router-dom';
import { IconButton, Link } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Navigation = () => {
  const [display, changeDisplay] = useState('none');

  return (
    <Box>
      <Flex
        display={['none', 'none', 'flex', 'flex']}
        as={'nav'}
        direction={'row'}
        alignItems={'center'}
        gap={['12px', '12px', '32px', '32px']}
      >
        <Box>
          <Link as={NavLink} to="/">
            Home
          </Link>
        </Box>
        <Box>
          <Link as={NavLink} to="/contacts">
            Contacts
          </Link>
        </Box>
      </Flex>

      <IconButton
        aria-label="Open Menu"
        size="md"
        icon={<HamburgerIcon />}
        display={['flex', 'flex', 'none', 'none']}
        onClick={() => changeDisplay('flex')}
      />

      {/* BurgerMenu */}
      <Flex
        w="110px"
        h="110px"
        boxShadow="dark-lg"
        rounded="md"
        bg="white"
        bgColor="gray.50"
        borderRadius="5px"
        pos="fixed"
        zIndex="20"
        top="50"
        left="2"
        display={display}
        onClick={() => changeDisplay('none')}
      >
        <Flex flexDir="column" p="5" gap="15px">
          <Box>
            <Link as={NavLink} color="black" to="/">
              Home
            </Link>
          </Box>
          <Box>
            <Link as={NavLink} color="black" to="/contacts">
              Contacts
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;
