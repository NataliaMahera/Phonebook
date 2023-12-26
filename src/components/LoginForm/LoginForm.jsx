import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authOperations';
import { Link as NavLink } from 'react-router-dom';
import {
  ArrowRightIcon,
  EmailIcon,
  InfoOutlineIcon,
  LockIcon,
  ViewIcon,
  ViewOffIcon,
} from '@chakra-ui/icons';
import {
  Link,
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Text,
  useToast,
  Card,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';

const LoginForm = () => {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(ViewOffIcon);

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(ViewIcon);
      setType('text');
    } else {
      setIcon(ViewOffIcon);
      setType('password');
    }
  };

  const dispatch = useDispatch();
  const toast = useToast();

  const onRegisterSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch(loginThunk(formData))
      .unwrap()
      .then(() =>
        toast({
          title: 'Submitted!',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top',
        })
      );

    form.reset();
  };

  return (
    <Card
      colorScheme={'brand'}
      w={[300, 400, 500]}
      m="auto"
      mt={20}
      mb={20}
      p={5}
      borderRadius="lg"
      boxShadow="dark-lg"
    >
      <Formik>
        <Form onSubmit={onRegisterSubmit}>
          <Box>
            <FormControl isRequired color="teal.800" marginBottom={'12px'}>
              <Text
                textAlign="center"
                fontSize={{ base: '22px', md: '24px', lg: '32px' }}
                mb={2}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontWeight="bold"
              >
                Log In
              </Text>
              <Text fontSize={14} mb={6} textAlign={'center'} variant={'brand'}>
                Please fill in the data you entered when creating your account.
              </Text>
            </FormControl>
            <FormControl isRequired color="black" marginBottom={'12px'}>
              <FormLabel variant={'brand'} fontSize={'15px'}>
                Email
              </FormLabel>
              <Card bg={'transparent'} variant={'brand'}>
                <InputGroup>
                  <InputLeftAddon>
                    <EmailIcon w={4} h={4} borderRadius={2} />
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
              </Card>
            </FormControl>
            <FormControl isRequired color="black" marginBottom={'12px'}>
              <FormLabel variant={'brand'} fontSize={'15px'}>
                Password
              </FormLabel>
              <Card bg={'transparent'} variant={'brand'}>
                <InputGroup>
                  <InputLeftAddon>
                    <LockIcon w={4} h={4} />
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
                    <Icon w={4} h={4} onClick={handleToggle} as={icon} />
                  </InputRightAddon>
                </InputGroup>
              </Card>
            </FormControl>
            <Button
              variant="brand"
              type="submit"
              w="100%"
              mt={4}
              color="gray.800"
              leftIcon={<ArrowRightIcon w={3} h={3} mr={'3px'} />}
              _hover={{
                bgGradient:
                  'linear(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',
                transitionDuration: '0.3s',
                transform: 'translateY(-5px)',
                transitionTimingFunction: 'ease-in-out',
              }}
            >
              Log In
            </Button>
            <Box textAlign="center" mt="5" mb={3}>
              <Link
                as={NavLink}
                to="/register"
                color="gray.500"
                m="auto"
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <InfoOutlineIcon w={4} h={4} mr={'8px'} stroke="black" />
                Don't have an acount? Sign in..
              </Link>
            </Box>
          </Box>
        </Form>
      </Formik>
    </Card>
  );
};

export default LoginForm;
