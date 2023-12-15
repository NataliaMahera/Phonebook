import ContactList from 'components/ContactList/ContactList';
import Container from 'components/Container/Container';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/contacts/contactsOperations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import Section from 'components/Section/Section';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  // const isOpenModal = useSelector(selectIsOpenModal);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  return (
    <>
      <Container>
        <Section title="Phonebook contacts">
          {/* {!isLoading && <ContactsForm />} */}
          <ContactsForm />
          {contacts.length > 0 ? (
            <Filter />
          ) : (
            <Notification message="Your phonebook is empty. Please add your contact!" />
          )}
          {error !== null && <p>{error}</p>}
          {showContacts && <ContactList />}
          {isLoading && <Loader />}
          {/* {isOpenModal && <Modal />} */}
          {/* <button
        className={css.newContactBtn}
        type="button"
        onClick={() => dispatch(openModal())}
      >
        New contact
      </button> */}
        </Section>
      </Container>
    </>
  );
};

export default ContactsPage;
