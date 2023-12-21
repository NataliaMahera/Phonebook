import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import { instance } from 'redux/auth/authOperations';

export const getContactsThunk = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkApi) => {
    try {
      const { data } = await instance.post('/contacts', { name, number });
      Notify.success(`Contact ${name} added successfully`);
      return data;
    } catch (error) {
      Notify.failure("Sorry, something's wrong");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);
      Notify.warning(`Contact ${data.name} delete successfully`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateContactThunk = createAsyncThunk(
  'contacts/updateContact',
  async (contactId, modalData, thunkApi) => {
    try {
      const { data } = await instance.patch(
        `/contacts/${contactId}`,
        modalData
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
