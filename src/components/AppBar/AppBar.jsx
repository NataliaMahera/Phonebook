import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from 'redux/auth/authSelectors';
import { Stack } from '@chakra-ui/react';

const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <Stack
      as={'header'}
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      p={[4, 4, 6]}
      bgGradient="linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Stack>
  );
};

export default AppBar;
