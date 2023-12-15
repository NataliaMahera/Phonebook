import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { registerThunk } from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const onRegisterSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };

    dispatch(registerThunk(formData));
    form.reset();
  };

  return (
    <form onSubmit={onRegisterSubmit} className={css.form}>
      <label className={css.label}>
        <p>Name</p>
        <input
          type="text"
          name="userName"
          className={css.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>

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
          required
        />
      </label>

      <button type="submit" className={css.addBtn}>
        Sign up
      </button>
      <Link className={css.link} to="/login">
        Already have an acount? Log in
      </Link>
    </form>
  );
};

export default RegisterForm;
