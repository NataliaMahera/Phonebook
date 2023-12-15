// import { useEffect } from 'react';
// import css from './Modal.module.css';
// import { useDispatch } from 'react-redux';
// import ContactsForm from 'components/ContactsForm/ContactsForm';
// import { closeModal } from 'redux/modal/modalReducer';

// export const Modal = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const handleKeyDown = e => {
//       if (e.code === 'Escape') {
//         dispatch(closeModal());
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     document.body.style.overflow = 'hidden';

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//       document.body.style.overflow = 'auto';
//     };
//   }, [dispatch]);

//   const handleOverlayClick = e => {
//     if (e.target === e.currentTarget) {
//       dispatch(closeModal());
//     }
//   };

//   return (
//     <div onClick={handleOverlayClick} className={css.overlay}>
//       {/* <div className={css.modal}>{children}</div> */}
//       <ContactsForm />
//     </div>
//   );
// };
