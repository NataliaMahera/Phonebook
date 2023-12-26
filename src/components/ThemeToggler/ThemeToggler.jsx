import { Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggler = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex>
      <IconButton
        icon={
          colorMode === 'light' ? (
            <FaSun color="#FAF089" />
          ) : (
            <FaMoon color="#63B3ED" />
          )
        }
        color="white"
        _hover={{ boxShadow: '0px 4px 18px -2px #c3d0dd' }}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Flex>
  );
};

export default ThemeToggler;
