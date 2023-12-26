import { extendTheme } from '@chakra-ui/react';

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
    brand: {
      50: 'gray',
      100: 'gray',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: 'gray',
      900: '#171923',
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  breakpoints,
  styles,
  components: {
    Button: {
      variants: {
        brand: props => ({
          bg: props.colorMode === 'dark' ? 'brand.400' : 'brand.300',
        }),
      },
    },
    Card: {
      variants: {
        brand: props => ({
          bg: props.colorMode === 'dark' ? 'brand.400' : 'brand.50',
        }),
      },
    },
    InputGroup: {
      variants: {
        brand: props => ({
          color: props.colorMode === 'dark' ? 'brand.100' : 'brand.200',
        }),
      },
    },
    Text: {
      variants: {
        brand: props => ({
          color: props.colorMode === 'dark' ? 'brand.400' : 'brand.900',
        }),
      },
    },
    Link: {
      variants: {
        brand: props => ({
          color: props.colorMode === 'dark' ? 'brand.200' : 'brand.900',
        }),
      },
    },
    FormLabel: {
      variants: {
        brand: props => ({
          color: props.colorMode === 'dark' ? 'brand.300' : 'brand.900',
        }),
      },
    },
  },
});
