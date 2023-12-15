import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthIsLoggedIn } from 'redux/auth/authSelectors';

const RestrictedRoute = ({ children, navigateTo = '/contacts' }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return isLoggedIn ? <Navigate to={navigateTo} replace /> : children;
};

export default RestrictedRoute;
