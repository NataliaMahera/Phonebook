import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from 'redux/auth/authSelectors';
import { logoutThunk } from 'redux/auth/authOperations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <div className={css.textWraper}>
        <h3 className={css.title}>Welcome, {user.name}</h3>
        <p className={css.mail}>{user.email}</p>
      </div>
      <button className={css.logOutBtn} onClick={() => dispatch(logoutThunk())}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
