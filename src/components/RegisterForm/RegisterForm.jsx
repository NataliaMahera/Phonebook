import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/authOperations';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Link,
  useToast,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Icon,
} from '@chakra-ui/react';
import {
  ArrowRightIcon,
  AtSignIcon,
  EmailIcon,
  InfoOutlineIcon,
  LockIcon,
  ViewOffIcon,
  ViewIcon,
  UnlockIcon,
} from '@chakra-ui/icons';
import { Link as NavLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { useState } from 'react';

const RegisterForm = () => {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(ViewOffIcon);

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(ViewIcon, UnlockIcon);
      setType('text');
    } else {
      setIcon(ViewOffIcon, LockIcon);
      setType('password');
    }
  };

  const dispatch = useDispatch();
  const toast = useToast();

  const onRegisterSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };

    dispatch(registerThunk(formData))
      .unwrap()
      .then(() =>
        toast({
          title: 'Submitted!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      )
      .catch(() =>
        toast({
          title: 'Incorrect email or password. Please try again.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      );

    form.reset();
  };

  return (
    <Formik>
      <Form onSubmit={onRegisterSubmit}>
        <Box
          w={[300, 400, 500]}
          m="auto"
          mt={20}
          mb={20}
          p={5}
          bg="gray.50"
          borderRadius="lg"
          boxShadow="dark-lg"
        >
          <FormControl isRequired color="teal.800" marginBottom={'12px'}>
            <Text
              textAlign="center"
              fontSize={{ base: '22px', md: '24px', lg: '32px' }}
              mb={2}
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontWeight="bold"
            >
              Sign Up
            </Text>
            <Text fontSize={14} mb={6} textAlign={'center'}>
              Please fill with the data all required fields and create your
              account.
            </Text>
            <FormLabel color="black" fontSize={'15px'}>
              Full name
            </FormLabel>
            <InputGroup mt={1}>
              <InputLeftAddon>
                <AtSignIcon
                  w={4}
                  h={4}
                  bgGradient="linear(to-r, green.200, pink.500)"
                  borderRadius={2}
                  color="black"
                />
              </InputLeftAddon>
              <Input
                variant="outline"
                placeholder="Enter full name"
                type="text"
                name="userName"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                autoComplete="off"
                required
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired color="black" marginBottom={'12px'}>
            <FormLabel color="black" fontSize={'15px'}>
              Email
            </FormLabel>
            <InputGroup mt={1}>
              <InputLeftAddon>
                <EmailIcon
                  w={4}
                  h={4}
                  bgGradient="linear(to-r, green.200, pink.500)"
                  borderRadius={2}
                />
              </InputLeftAddon>
              <Input
                variant="outline"
                type="email"
                name="userEmail"
                required
                placeholder="Enter email"
                autoComplete="off"
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired color="black" marginBottom={'12px'}>
            <FormLabel color="black" fontSize={'15px'}>
              Password
            </FormLabel>
            <InputGroup mt={1}>
              <InputLeftAddon>
                <LockIcon
                  w={4}
                  h={4}
                  color="black"
                  bgGradient="linear(to-r, green.200, pink.500)"
                  borderRadius={2}
                />
              </InputLeftAddon>
              <Input
                variant="outline"
                type={type}
                name="userPassword"
                placeholder="Enter password"
                required
                autoComplete="off"
              />

              <InputRightAddon>
                <Icon
                  w={4}
                  h={4}
                  color="black"
                  onClick={handleToggle}
                  as={icon}
                />
              </InputRightAddon>
            </InputGroup>
          </FormControl>
          <Button
            type="submit"
            w="100%"
            mt={4}
            color="gray.800"
            bg="gray.200"
            leftIcon={<ArrowRightIcon w={3} h={3} mr={'3px'} />}
            _hover={{
              bgGradient:
                'linear(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',
              transitionDuration: '0.3s',
              transform: 'translateY(-5px)',
              transitionTimingFunction: 'ease-in-out',
            }}
          >
            Sign Up
          </Button>
          <Box textAlign="center" mt="5" mb={3}>
            <Link
              as={NavLink}
              to="/login"
              color="gray.500"
              m="auto"
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <InfoOutlineIcon w={4} h={4} mr={'8px'} stroke="black" />
              Already have an acount? Log in..
            </Link>
          </Box>
        </Box>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
