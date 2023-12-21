import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
  updateContactThunk,
} from './contactsOperations';
import {
  handleFulfilledAdd,
  handleFulfilledDelete,
  handleFulfilledGet,
  handleFulfilledUpdate,
  handlePending,
  handleRejected,
} from './contactsFunctionsReducer';

const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
};

// Визначення функції getActions, яка повертає умову isAnyOf для зазначеного типу дії
const getActions = type =>
  isAnyOf(
    addContactsThunk[type],
    deleteContactsThunk[type],
    getContactsThunk[type],
    updateContactThunk[type]
  );

const initialState = { contactItems: [], isLoading: false, error: null };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    const { PENDING, REJECTED } = STATUS;
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(addContactsThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      .addCase(updateContactThunk.fulfilled, handleFulfilledUpdate)
      .addMatcher(getActions(PENDING), handlePending)
      .addMatcher(getActions(REJECTED), handleRejected);
  },
});

// Редюсер слайсу (підключаємо в store)
export const contactsReducer = contactsSlice.reducer;
