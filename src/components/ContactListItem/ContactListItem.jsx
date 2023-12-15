import { useDispatch } from 'react-redux';
import css from './ContactListItem.module.css';
import { deleteContactsThunk } from 'redux/contacts/contactsOperations';
import { getRandomHexColor } from './GetRandomHexColor';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <li key={id} className={css.contactListItem}>
        <div className={css.circle}>
          <span className={css.letter} style={{ color: getRandomHexColor() }}>
            {name.slice(0, 1).toUpperCase()}
          </span>
        </div>
        <b className={css.name}>{name} : </b>
        {number.slice(0, 13)}
      </li>
      <button
        type="button"
        className={css.deleteBtn}
        onClick={() => dispatch(deleteContactsThunk(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactListItem;
