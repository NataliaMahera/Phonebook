import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { createStandaloneToast } from '@chakra-ui/react';

const { toast } = createStandaloneToast();

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = token => {
  instance.defaults.headers.common.Authorization = '';
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/users/signup', formData);
      setToken(data.token);
      return data;
    } catch (error) {
      toast({
        title: 'Incorrect email or password. Please try again.',
        status: 'warning',
        position: 'top',
        isClosable: true,
      });
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/users/login', formData);
      setToken(data.token);

      return data;
    } catch (error) {
      toast({
        title: `You entered an incorrect login or password. Please try again.`,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      await instance.post('/users/logout');
      clearToken();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const persistedToken = state.auth.token;
      setToken(persistedToken);
      const { data } = await instance.get('/users/current');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const persistedToken = state.auth.token;

      if (!persistedToken) return false;
      return true;
    },
  }
);
