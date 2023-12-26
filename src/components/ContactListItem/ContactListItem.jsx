import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsThunk } from 'redux/contacts/contactsOperations';
import { getRandomHexColor } from './GetRandomHexColor';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Card,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import React from 'react';
import { UpdateModal } from 'components/UpdateModal/UpdateModal';
import { openModal } from 'redux/modal/modalReducer';
import { selectIsOpenModal } from 'redux/modal/modalSelectors';
import { createStandaloneToast } from '@chakra-ui/react';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(selectIsOpenModal);

  const { isOpen, onOpen, onClose } = useDisclosure();
  // Alert delete window
  const cancelRef = React.useRef();

  const { ToastContainer, toast } = createStandaloneToast();

  const handleDelete = () => {
    dispatch(deleteContactsThunk(id))
      .unwrap()
      .then(() =>
        toast({
          title: `${name} successfully deleted`,
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top',
        })
      );
  };

  return (
    <>
      <Flex
        pr={5}
        pl={5}
        pb={2}
        w={[350, 400, 500]}
        mb={3}
        gap={1}
        justifyContent={'space-between'}
        boxShadow={'2xl'}
        borderRadius={10}
      >
        <Box
          key={id}
          display={'flex'}
          justifyContent={'space-between'}
          gap={2}
          alignItems={'center'}
        >
          <Card
            w={8}
            h={8}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            variant={'brand'}
            borderRadius={'50%'}
          >
            <Box style={{ color: getRandomHexColor() }}>
              {name.slice(0, 1).toUpperCase()}
            </Box>
          </Card>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Text
              fontSize={{ base: '15px', md: '19px', lg: '19px' }}
              variant={'brand'}
            >
              {name} : {number.slice(0, 13)}
            </Text>
          </Box>
        </Box>

        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Button
            w={10}
            h={10}
            mr={2}
            type="button"
            onClick={onOpen}
            variant={'brand'}
            _hover={{
              bgGradient:
                'linear(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',
              transitionDuration: '0.3s',
              transform: 'translateY(-5px)',
              transitionTimingFunction: 'ease-in-out',
            }}
          >
            <DeleteIcon w={4} h={4} borderRadius={2} color="gray.700" />
          </Button>

          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader
                  variant={'brand'}
                  fontSize="lg"
                  fontWeight="bold"
                >
                  <Text variant={'brand'}>Delete Contact</Text>
                </AlertDialogHeader>

                <AlertDialogBody variant={'brand'}>
                  <Text variant={'brand'}>
                    Are you sure? You can't undo this action afterwards.
                  </Text>
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>

                  <Button colorScheme="red" onClick={handleDelete} ml={3}>
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>

          {/* Open update modal window */}
          <Button
            onClick={() => dispatch(openModal({ id, name, number }))}
            type="button"
            variant={'brand'}
            w={10}
            h={10}
            _hover={{
              bgGradient:
                'linear(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',
              transitionDuration: '0.3s',
              transform: 'translateY(-5px)',
              transitionTimingFunction: 'ease-in-out',
            }}
          >
            <EditIcon w={4} h={4} borderRadius={2} color="black" />
          </Button>
          {isOpenModal && <UpdateModal />}
        </Box>
      </Flex>
      <ToastContainer />
    </>
  );
};

export default ContactListItem;
