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
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import React from 'react';
import { UpdateModal } from 'components/UpdateModal/UpdateModal';
import { openModal } from 'redux/modal/modalReducer';
import { selectIsOpenModal } from 'redux/modal/modalSelectors';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(selectIsOpenModal);

  const { isOpen, onOpen, onClose } = useDisclosure();
  // Alert delete window
  const cancelRef = React.useRef();

  return (
    <Flex
      pr={5}
      pl={5}
      pb={2}
      w={[300, 400, 500]}
      justifyContent={'space-between'}
      boxShadow={'2xl'}
      borderRadius={10}
    >
      <Box
        key={id}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box
          w={8}
          h={8}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          bgColor={'white'}
          borderRadius={'50%'}
          mr={2}
        >
          <Box style={{ color: getRandomHexColor() }}>
            {name.slice(0, 1).toUpperCase()}
          </Box>
        </Box>
        <Text
          fontSize={{ base: '15px', md: '19px', lg: '19px' }}
          color={'black'}
        >
          {name} : {number.slice(0, 13)}
        </Text>
      </Box>

      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Button
          w={10}
          h={10}
          mr={2}
          type="button"
          onClick={onOpen}
          bgColor="gray.200"
        >
          <DeleteIcon
            w={4}
            h={4}
            // bgGradient="linear(to-r, green.200, pink.500)"
            borderRadius={2}
            color="gray.700"
          />
        </Button>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader
                color={'black'}
                fontSize="lg"
                fontWeight="bold"
              >
                Delete Contact
              </AlertDialogHeader>

              <AlertDialogBody color={'black'}>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>

                <Button
                  colorScheme="red"
                  onClick={() => dispatch(deleteContactsThunk(id))}
                  ml={3}
                >
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
          bgColor="gray.200"
          w={10}
          h={10}
        >
          <EditIcon
            w={4}
            h={4}
            bgGradient="linear(to-r, green.200, pink.500)"
            borderRadius={2}
            color="black"
          />
        </Button>
        {isOpenModal && <UpdateModal />}
      </Box>
    </Flex>
  );
};

export default ContactListItem;
