import React from 'react';
import { ActivePage } from './authNav.styled';

// Компонент AuthNav відповідає за навігаційну панель для неаутентифікованого користувача
const AuthNav = () => {
  return (
    <div>
      <ActivePage to="/login">Log in</ActivePage>
      <ActivePage to="/register">Sign up</ActivePage>
    </div>
  );
};

export default AuthNav;
