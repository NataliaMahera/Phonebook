import css from './UpdateModal.module.css';
import {
  AtSignIcon,
  CheckIcon,
  InfoOutlineIcon,
  MinusIcon,
  PhoneIcon,
} from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  Flex,
  Card,
  Box,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateContactThunk } from 'redux/contacts/contactsOperations';
import { closeModal } from 'redux/modal/modalReducer';
import { selectModalData } from 'redux/modal/modalSelectors';

export const UpdateModal = () => {
  const dispatch = useDispatch();
  const modalData = useSelector(selectModalData);

  const [userData, setUserData] = useState({
    name: modalData.name,
    number: modalData.number,
  });

  const handleSubmit = e => {
    e.preventDefault();

    const formData = {
      name: userData.name,
      number: userData.number,
    };

    dispatch(updateContactThunk({ contactId: modalData.id, formData }));
    console.log(formData);

    dispatch(closeModal());
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(closeModal());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [dispatch]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };
  return (
    <>
      <div className={css.overlay} onClick={handleOverlayClick}>
        <Formik>
          <Form onSubmit={handleSubmit}>
            <Card
              position={'absolute'}
              top={'50%'}
              left={'50%'}
              transform={'translate(-50%, -50%)'}
              w={[300, 400, 400]}
              m="auto"
              pt={3}
              pr={5}
              pl={5}
              pb={5}
              borderRadius="md"
              boxShadow="2xl"
              variant={'brand'}
            >
              <Box>
                <FormControl color={'white'} marginBottom={'12px'}>
                  <Stack>
                    <Text
                      fontSize={{ base: '17px', md: '20px', lg: '20px' }}
                      mt={3}
                      mb={3}
                      textAlign={'center'}
                      bgGradient="linear(to-l, #7928CA, #FF0080)"
                      bgClip="text"
                      fontWeight="bold"
                    >
                      Update your contact
                    </Text>
                    <Text
                      fontSize={{ base: '14px', md: '17px', lg: '17px' }}
                      textAlign={'center'}
                      variant={'brand'}
                    >
                      <InfoOutlineIcon
                        w={4}
                        h={4}
                        mr={'8px'}
                        color={'gray.500'}
                      />
                      You can edit your contact name or phone and save changes.
                    </Text>
                  </Stack>
                </FormControl>
                <FormControl color="black" marginBottom={'12px'}>
                  <FormLabel variant={'brand'} fontSize={'15px'}>
                    Name
                  </FormLabel>
                  <Card bg={'transparent'} variant={'brand'} boxShadow="md">
                    <InputGroup mt={1}>
                      <InputLeftAddon>
                        <AtSignIcon w={4} h={4} borderRadius={2} />
                      </InputLeftAddon>
                      <Input
                        variant="outline"
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        boxShadow={'linear(to-r, green.200, pink.500)'}
                      />
                    </InputGroup>
                  </Card>
                </FormControl>
                <FormControl color="black" marginBottom={'12px'}>
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
                        value={userData.number}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                    </InputGroup>
                  </Card>
                </FormControl>
                <Flex gap={5}>
                  <Button
                    variant={'brand'}
                    onClick={() => dispatch(closeModal())}
                    type="submit"
                    w="100%"
                    mt={5}
                    mb={2}
                    color="gray.700"
                    leftIcon={
                      <MinusIcon w={3} h={3} mr={'3px'} color={'black'} />
                    }
                    _hover={{
                      bgGradient:
                        'linear(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',
                      transitionDuration: '0.3s',
                      transform: 'translateY(-5px)',
                      transitionTimingFunction: 'ease-in-out',
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant={'brand'}
                    type="submit"
                    w="100%"
                    mt={5}
                    mb={2}
                    color="gray.700"
                    leftIcon={
                      <CheckIcon w={3} h={3} mr={'3px'} color={'black'} />
                    }
                    _hover={{
                      bgGradient:
                        'linear(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',
                      transitionDuration: '0.3s',
                      transform: 'translateY(-5px)',
                      transitionTimingFunction: 'ease-in-out',
                    }}
                  >
                    Save
                  </Button>
                </Flex>
              </Box>
            </Card>
          </Form>
        </Formik>
      </div>
    </>
  );
};

// return (
//   <>
//     <Button onClick={() => dispatch(openModal())} type="button">
//       <EditIcon
//         w={4}
//         h={4}
//         bgGradient="linear(to-r, green.200, pink.500)"
//         borderRadius={2}
//         color="black"
//       />
//     </Button>

//     <Modal onSubmit={onModalFormSubmit}>
//       <ModalOverlay onClick={handleOverlayClick} />
//       <ModalContent>
//         <ModalHeader>Update your contact</ModalHeader>
//         <ModalCloseButton />
//         <ModalBody pb={6}>
//           <FormControl>
//             <FormLabel>Full name</FormLabel>
//             <InputGroup mt={1}>
//               <InputLeftAddon>
//                 <AtSignIcon
//                   w={4}
//                   h={4}
//                   bgGradient="linear(to-r, green.200, pink.500)"
//                   borderRadius={2}
//                   color="black"
//                 />
//               </InputLeftAddon>
//               <Input
//                 variant="outline"
//                 placeholder="Enter full name"
//                 type="text"
//                 name="name"
//                 value={userData.name}
//                 onChange={handleModalFormChange}
//                 pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 autoComplete="off"
//                 boxShadow={'linear(to-r, green.200, pink.500)'}
//                 required
//               />
//             </InputGroup>
//           </FormControl>

//           <FormControl mt={4}>
//             <FormLabel>Phone number</FormLabel>
//             <InputGroup mt={1}>
//               <InputLeftAddon>
//                 <PhoneIcon
//                   w={4}
//                   h={4}
//                   color="black"
//                   bgGradient="linear(to-r, green.200, pink.500)"
//                   borderRadius={2}
//                 />
//               </InputLeftAddon>
//               <Input
//                 variant="outline"
//                 type="tel"
//                 name="number"
//                 value={userData.number}
//                 onChange={handleModalFormChange}
//                 placeholder="Enter phone number"
//                 required
//                 autoComplete="off"
//               />
//             </InputGroup>
//           </FormControl>
//         </ModalBody>

//         <ModalFooter>
//           <Button onClick={() => dispatch(closeModal())}>
//             colorScheme="blue" mr={3} Save
//           </Button>
//           <Button>Cancel</Button>
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   </>
// );

//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const initialRef = React.useRef(null);
//   const finalRef = React.useRef(null);

//   return (
//     <>
//       <Button onClick={onOpen} type="button">
//         <EditIcon
//           w={4}
//           h={4}
//           bgGradient="linear(to-r, green.200, pink.500)"
//           borderRadius={2}
//           color="black"
//         />
//       </Button>

//       <Modal
//         initialFocusRef={initialRef}
//         finalFocusRef={finalRef}
//         isOpen={isOpen}
//         onClose={onClose}
//       >
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Update your contact</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6}>
//             <FormControl>
//               <FormLabel>Full name</FormLabel>
//               <Input ref={initialRef} placeholder="Update name">
//                 {name}
//               </Input>
//             </FormControl>

//             <FormControl mt={4}>
//               <FormLabel>Phone number</FormLabel>
//               <Input placeholder="Update number" />
//             </FormControl>
//           </ModalBody>

//           <ModalFooter>
//             <Button
//               onClick={() =>
//                 dispatch(
//                   updateContactThunk({ contactId: modalData.id, formData })
//                 )
//               }
//             >
//               colorScheme="blue" mr={3} Save
//             </Button>
//             <Button onClick={onClose}>Cancel</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };
