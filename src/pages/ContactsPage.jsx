import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/contacts/contactsOperations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import CardContainer from 'components/Container/CardContainer';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <CardContainer>
          <ContactsForm />
          {contacts.length > 0 && <Filter />}
          {error !== null && <p>{error}</p>}
          {showContacts && <ContactList />}
        </CardContainer>
      )}
    </>
  );
};

export default ContactsPage;
