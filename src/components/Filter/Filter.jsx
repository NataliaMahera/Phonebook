import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { changeFilter } from 'redux/contacts/filterSlice';
import {
  Card,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

// Компонент фільтрації контактів
const Filter = () => {
  const filterQuery = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangeFilter = ({ currentTarget: { value } }) => {
    const newValue = value.toLowerCase();
    dispatch(changeFilter(newValue));
  };
  return (
    <FormControl mt={8} mb={5}>
      <FormLabel
        fontSize={{ base: '16px', md: '19px', lg: '19px' }}
        mb={3}
        textAlign={'center'}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontWeight="bold"
      >
        Find contact by name or phone
      </FormLabel>
      <Card bg={'transparent'} variant={'brand'}>
        <InputGroup mt={1} boxShadow="md">
          <InputLeftAddon>
            <SearchIcon w={4} h={4} borderRadius={2} />
          </InputLeftAddon>
          <Input
            type="text"
            name="filter"
            value={filterQuery}
            onChange={onChangeFilter}
            autoComplete="off"
            placeholder="Enter your contact"
          />
        </InputGroup>
      </Card>
    </FormControl>
  );
};

export default Filter;
