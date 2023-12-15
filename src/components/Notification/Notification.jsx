import css from './Notification.module.css';

const Notification = ({ message }) => {
  return <h2 className={css.fbTitle}>{message}</h2>;
};

export default Notification;
