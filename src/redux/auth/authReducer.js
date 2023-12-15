import { initialState } from './authInitialState';
import {
  handleFulfilledLogin,
  handleFulfilledLogout,
  handleFulfilledRefresh,
  handleFulfilledRegister,
  handlePending,
  handleRejected,
} from './authFunctionsReducer';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './authOperations';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const STATUS = { PENDING: 'pending', REJECTED: 'rejected' };

const getActions = type =>
  isAnyOf(registerThunk[type], loginThunk[type], refreshThunk[type]);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    const { PENDING, REJECTED } = STATUS;
    builder
      .addCase(registerThunk.fulfilled, handleFulfilledRegister)
      .addCase(loginThunk.fulfilled, handleFulfilledLogin)
      .addCase(refreshThunk.fulfilled, handleFulfilledRefresh)
      .addCase(logoutThunk.fulfilled, handleFulfilledLogout)
      .addMatcher(getActions(PENDING), handlePending)
      .addMatcher(getActions(REJECTED), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
