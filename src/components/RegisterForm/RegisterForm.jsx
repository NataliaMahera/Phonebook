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
  Card,
} from '@chakra-ui/react';
import {
  ArrowRightIcon,
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
import { AiOutlineUser } from 'react-icons/ai';

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
          title: 'Congrats, you are registered!',
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
      w={[350, 400, 500]}
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
                Sign Up
              </Text>
              <Text fontSize={14} mb={6} textAlign={'center'} variant={'brand'}>
                Please fill with the data all required fields and create your
                account.
              </Text>
              <FormLabel fontSize={'15px'} variant={'brand'}>
                Username
              </FormLabel>
              <Card bg={'transparent'} variant={'brand'}>
                <InputGroup>
                  <InputLeftAddon>
                    <AiOutlineUser />
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
              </Card>
            </FormControl>
            <FormControl isRequired color="black" marginBottom={'12px'}>
              <FormLabel fontSize={'15px'} variant={'brand'}>
                Email
              </FormLabel>
              <Card bg={'transparent'} variant={'brand'}>
                <InputGroup>
                  <InputLeftAddon>
                    <EmailIcon w={4} h={4} />
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
              <FormLabel fontSize={'15px'} variant={'brand'}>
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
    </Card>
  );
};

export default RegisterForm;
