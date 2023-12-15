import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsForm.module.css';
import { nanoid } from 'nanoid';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { addContactsThunk } from 'redux/contacts/contactsOperations';
import { Notify } from 'notiflix';

const ContactsForm = () => {
  const [data, setData] = useState({ name: '', number: '' });
  const contacts = useSelector(selectContacts);
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
    // .unwrap()
    // .then(data => {
    //   setData({ name: '', number: '' });
    //   Notify.success(`${data.name} successfully added to your contacts`);
    // })
    // .catcth(() => {
    //   Notify.failure("Sorry, something's wrong");
    // });

    setData({ name: '', number: '' });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <p className={css.modalText}>Add new contact to your phonebook</p>
        <label className={css.label}>
          <p className={css.descModal}>Name</p>
          <input
            type="text"
            name="name"
            className={css.input}
            value={data.name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>

        <label className={css.label}>
          <p className={css.descModal}>Number</p>
          <input
            type="tel"
            name="number"
            className={css.input}
            value={data.number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            required
          />
        </label>

        <button
          // onClick={() => dispatch(closeModal())}
          type="submit"
          className={css.addBtn}
        >
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactsForm;
