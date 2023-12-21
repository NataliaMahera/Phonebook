import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from 'redux/auth/authSelectors';
import { logoutThunk } from 'redux/auth/authOperations';
import css from './UserMenu.module.css';
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';

const UserMenu = () => {
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  return (
    <Box>
      <Flex
        direction={['row']}
        alignItems={'center'}
        gap={['14px', '14px', '40px', '40px']}
      >
        <Flex
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          direction={['raw']}
          gap={4}
        >
          <Stack spacing={2}>
            <Avatar size={['sm', 'md']}>
              <AvatarBadge boxSize="1em" bg="green.500" />
            </Avatar>
          </Stack>

          <Flex direction={['column']}>
            <Text fontSize={['md', 'lg']} color={'gray.200'}>
              Welcome, {user.name}
            </Text>
            <Text fontSize={['xs', 'sm']} color={'gray.200'}>
              {user.email}
            </Text>
          </Flex>
        </Flex>
        <Box>
          <Button
            className={css.logOutBtn}
            onClick={() => dispatch(logoutThunk())}
            leftIcon={<ArrowLeftIcon w={3} h={3} mr={'3px'} />}
          >
            Log Out
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default UserMenu;
