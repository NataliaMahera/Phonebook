import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/contactsSelectors';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);

  const sortedContacts = [...filteredContacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <>
      <ul>
        {isLoading && <Loader />}
        {!isLoading &&
          sortedContacts.map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))}
      </ul>
    </>
  );
};

export default ContactList;
