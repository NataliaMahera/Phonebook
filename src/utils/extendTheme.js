import { extendTheme } from '@chakra-ui/react';
// import { modalTheme } from './modal';

const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
};

const styles = {
  global: () => ({
    html: {
      width: '100%',
      height: '100%',
    },

    body: {
      width: '100%',
      height: '100%',
      color: 'hsl(0, 0%, 100%)',
    },

    '#root': {
      width: '100%',
      height: '100%',
    },

    '*': {
      boxSizing: 'border-box',
    },
  }),
};

export const theme = extendTheme({
  colors: {
    app: {
      white: 'hsl(0, 0%, 100%)',
      black: 'hsl(0, 0%, 0%)',
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  breakpoints,
  styles,
  components: {
    // Modal: modalTheme,
  },
});
