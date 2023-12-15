import React from 'react';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onLoginSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch(loginThunk(formData));
    form.reset();
  };

  return (
    <form onSubmit={onLoginSubmit} className={css.form}>
      <label className={css.label}>
        <p>Email</p>
        <input type="email" name="userEmail" className={css.input} required />
      </label>

      <label className={css.label}>
        <p>Password</p>
        <input
          type="password"
          name="userPassword"
          className={css.input}
          minLength={7}
          required
        />
      </label>

      <button type="submit" className={css.addBtn}>
        Sign in
      </button>
      <Link className={css.link} to="/register">
        Don't have an acount? Sign in
      </Link>
    </form>
  );
};

export default LoginForm;
