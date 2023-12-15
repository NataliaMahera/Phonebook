import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import css from './ContactList.module.css';
import {
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/contactsSelectors';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);

  // const sotredContacts = [...filteredContacts].sort((a, b) => b.name - a.name);

  return (
    <>
      <ul className={css.contactList}>
        {isLoading && <Loader />}
        {!isLoading &&
          filteredContacts.map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))}
      </ul>
    </>
  );
};

export default ContactList;
