import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { addContactsThunk } from 'redux/contacts/contactsOperations';
import { Notify } from 'notiflix';
import { Formik, Form } from 'formik';
import {
  Box,
  Button,
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
  AtSignIcon,
  ChatIcon,
  InfoOutlineIcon,
  PhoneIcon,
} from '@chakra-ui/icons';

const ContactsForm = () => {
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
      Notify.warning(`${data.name} is already in contacts.`);
      return;
    }

    dispatch(
      addContactsThunk({ name: data.name, number: data.number, id: nanoid() })
    );

    setData({ name: '', number: '' });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
  };

  return (
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
                      color={'gray.500'}
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
                      color={'gray.500'}
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
                >
                  Add new contact to your phonebook
                </Text>
              </Stack>
            </FormControl>
            <FormControl isRequired color="black" marginBottom={'12px'}>
              <FormLabel color="black" fontSize={'15px'}>
                Name
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
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  autoComplete="off"
                  boxShadow={'linear(to-r, green.200, pink.500)'}
                  required
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired color="black" marginBottom={'12px'}>
              <FormLabel color="black" fontSize={'15px'}>
                Phone number
              </FormLabel>
              <InputGroup mt={1}>
                <InputLeftAddon>
                  <PhoneIcon
                    w={4}
                    h={4}
                    color="black"
                    bgGradient="linear(to-r, green.200, pink.500)"
                    borderRadius={2}
                  />
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
            </FormControl>
            <Button
              type="submit"
              w="100%"
              mt={5}
              mb={1}
              color="gray.700"
              bg="gray.200"
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
  );
};

export default ContactsForm;
