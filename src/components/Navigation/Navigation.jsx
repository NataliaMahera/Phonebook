import { Link as NavLink } from 'react-router-dom';
import {
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';

const Navigation = () => {
  return (
    <Box display={'flex'} gap={2}>
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
      {/* BurgerMenu */}
      <Menu>
        <MenuButton
          color={'white'}
          display={['flex', 'flex', 'none', 'none']}
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          _hover={{ bg: 'gray.400' }}
          _expanded={{ bg: 'blue.400' }}
          _focus={{ boxShadow: 'outline' }}
        />
        <MenuList boxShadow="dark-lg">
          <MenuItem>
            <Link as={NavLink} variant={'brand'} to="/">
              Home
            </Link>
          </MenuItem>
          <MenuItem>
            <Link as={NavLink} variant={'brand'} to="/contacts">
              Contacts
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <ThemeToggler />
    </Box>
  );
};

export default Navigation;
