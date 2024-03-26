import { Box } from '@chakra-ui/react';
import AppBar from 'components/AppBar/AppBar';
import { Footer } from 'components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Box minH={'75vh'}>
        <main>{children}</main>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
