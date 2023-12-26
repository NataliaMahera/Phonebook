import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { addContactsThunk } from 'redux/contacts/contactsOperations';
import { Formik, Form } from 'formik';
import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  AddIcon,
  ChatIcon,
  InfoOutlineIcon,
  PhoneIcon,
} from '@chakra-ui/icons';

import { createStandaloneToast } from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';

const ContactsForm = () => {
  const { ToastContainer, toast } = createStandaloneToast();

  const [data, setData] = useState({ name: '', number: '' });

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const contactsCount = contacts.length;

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const isExist = contacts.some(
      contact =>
        contact.name.toLowerCase().trim() === data.name.toLowerCase().trim() ||
        contact.number === data.number
    );

    if (isExist) {
      toast({
        title: `${data.name} is already in contacts.`,
        status: 'info',
        position: 'top',
        isClosable: true,
      });
      return;
    }

    dispatch(
      addContactsThunk({ name: data.name, number: data.number, id: nanoid() })
    )
      .unwrap()
      .then(() =>
        toast({
          title: `Contact ${data.name} added successfully`,
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top',
        })
      );

    setData({ name: '', number: '' });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
  };

  return (
    <>
      <Formik>
        <Form onSubmit={handleSubmit}>
          <Box>
            <Box
              w={['100vw', 400, 500]}
              m="auto"
              pt={3}
              pr={5}
              pl={5}
              pb={5}
              borderRadius="md"
              boxShadow="2xl"
            >
              <FormControl isRequired color="teal.800" marginBottom={'12px'}>
                <Stack>
                  {!contacts.length && !error && !isLoading && (
                    <Box>
                      <Text
                        fontSize={{ base: '15px', md: '19px', lg: '19px' }}
                        textAlign={'center'}
                        variant={'brand'}
                      >
                        <InfoOutlineIcon
                          w={4}
                          h={4}
                          mr={'8px'}
                          color={'gray.500'}
                        />
                        Your phonebook is empty.
                      </Text>
                    </Box>
                  )}
                  {contactsCount > 0 && (
                    <Box>
                      <Text
                        fontSize={{ base: '15px', md: '19px', lg: '19px' }}
                        textAlign={'center'}
                        variant={'brand'}
                      >
                        <ChatIcon w={4} h={4} mr={'8px'} color={'gray.500'} />
                        You have{' '}
                        {contactsCount === 1
                          ? `${contactsCount} contact`
                          : `${contactsCount} contacts`}{' '}
                        in the phonebook.
                      </Text>
                    </Box>
                  )}
                  <Text
                    fontSize={{ base: '16px', md: '18px', lg: '18px' }}
                    mb={3}
                    textAlign={'center'}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontWeight="bold"
                    variant={'brand'}
                  >
                    Add new contact to your phonebook
                  </Text>
                </Stack>
              </FormControl>
              <FormControl isRequired color="black" marginBottom={'12px'}>
                <FormLabel variant={'brand'} fontSize={'15px'}>
                  Name
                </FormLabel>
                <Card bg={'transparent'} variant={'brand'} boxShadow="md">
                  <InputGroup mt={1}>
                    <InputLeftAddon>
                      <AiOutlineUser />
                    </InputLeftAddon>
                    <Input
                      variant="outline"
                      placeholder="Enter full name"
                      type="text"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                      pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      autoComplete="off"
                      required
                    />
                  </InputGroup>
                </Card>
              </FormControl>
              <FormControl isRequired color="black" marginBottom={'12px'}>
                <FormLabel variant={'brand'} fontSize={'15px'}>
                  Phone number
                </FormLabel>
                <Card bg={'transparent'} variant={'brand'} boxShadow="md">
                  <InputGroup mt={1}>
                    <InputLeftAddon>
                      <PhoneIcon w={4} h={4} borderRadius={2} />
                    </InputLeftAddon>
                    <Input
                      variant="outline"
                      type="tel"
                      name="number"
                      value={data.number}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      required
                      autoComplete="off"
                    />
                  </InputGroup>
                </Card>
              </FormControl>
              <Button
                variant="brand"
                type="submit"
                w="100%"
                mt={5}
                mb={2}
                color="gray.700"
                leftIcon={<AddIcon w={3} h={3} mr={'3px'} />}
                _hover={{
                  bgGradient:
                    'linear(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',
                  transitionDuration: '0.3s',
                  transform: 'translateY(-5px)',
                  transitionTimingFunction: 'ease-in-out',
                }}
              >
                Add contact
              </Button>
            </Box>
          </Box>
        </Form>
      </Formik>
      <ToastContainer />
    </>
  );
};

export default ContactsForm;
