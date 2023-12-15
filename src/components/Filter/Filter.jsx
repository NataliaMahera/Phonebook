import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { changeFilter } from 'redux/contacts/filterSlice';

// Компонент фільтрації контактів
const Filter = () => {
  const filterQuery = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangeFilter = ({ currentTarget: { value } }) => {
    const newValue = value.toLowerCase();
    dispatch(changeFilter(newValue));
  };
  return (
    <>
      <label className={css.filterLabel}>
        <p className={css.description}>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          className={css.input}
          value={filterQuery}
          onChange={onChangeFilter}
          placeholder="Enter your contact"
        />
      </label>
    </>
  );
};

export default Filter;
