import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// qwe123rty@mail.com
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null)
      return thunkAPI.rejectWithValue('Unable to fetch user');
    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

// const postUser = async (newUser, thunkAPI) => {
//   try {
//     const response = await axios.post('/users/signup', newUser);
//     setAuthHeader(response.data.token);
//     return response.data;
//   } catch (e) {
//     return thunkAPI.rejectWithValue(e.message);
//   }
// };

// const postLogIn = async (logInUser, thunkAPI) => {
//   try {
//     const response = await axios.post('/users/login', logInUser);
//     setAuthHeader(response.data.token);
//     return response.data;
//   } catch (e) {
//     return thunkAPI.rejectWithValue(e.message);
//   }
// };

// const postLogOut = async (_, thunkAPI) => {
//   try {
//     await axios.post('/users/logout');
//     clearAuthHeader();
//   } catch (e) {
//     return thunkAPI.rejectWithValue(e.message);
//   }
// };

// const getCurrentUser = async (_, thunkAPI) => {
//   const state = thunkAPI.getState();
//   const persistedToken = state.auth.token;

//   if (persistedToken === null) {
//     return thunkAPI.rejectWithValue('Unable to fetch user');
//   }

//   try {
//     setAuthHeader(persistedToken);
//     const response = await axios.get('/users/current');
//     return response.data;
//   } catch (e) {
//     return thunkAPI.rejectWithValue(e.message);
//   }
// };

// export const register = createAsyncThunk('auth/postUser', postUser);

// export const logIn = createAsyncThunk('auth/postLogIn', postLogIn);

// export const logOut = createAsyncThunk('auth/postLogOut', postLogOut);

// export const refreshUser = createAsyncThunk(
//   'auth/getCurrentUser',
//   getCurrentUser
// );
