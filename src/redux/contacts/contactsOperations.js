import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/authOperations';
import { createStandaloneToast } from '@chakra-ui/react';

const { toast } = createStandaloneToast();

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
      return data;
    } catch (error) {
      toast({
        title: "Sorry, something's wrong",
        status: 'error',
        position: 'top',
        isClosable: true,
      });
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateContactThunk = createAsyncThunk(
  'contacts/updateContact',
  async ({ contactId, formData }, thunkApi) => {
    try {
      const { data } = await instance.patch(`/contacts/${contactId}`, formData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
