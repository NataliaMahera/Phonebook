import React from 'react';
import { ActivePage } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from 'redux/auth/authSelectors';
import { Link } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <nav className={css.nav}>
      <ActivePage to="/">
        Phone<span className={css.span}>Book.</span>
      </ActivePage>
      {/* Посилання на сторінку контактів, доступне тільки для авторизованих користувачів */}
      {isLoggedIn && (
        <Link className={css.contacts} to="/contacts">
          Contacts
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
