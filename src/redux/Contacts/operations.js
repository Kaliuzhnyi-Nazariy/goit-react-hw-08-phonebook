import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const result = await axios.get('/contacts');
      return result.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

// qwe123rty@mail.com

// export const addNewContact = createAsyncThunk(
//   'contacts/addNewContact',
//   async ({ name, phone }, thunkApi) => {
//     try {
//       console.log({ name, phone });
//       const result = await axios.post('/contacts', { name, phone });
//       console.log(result.data);

//       return result.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.massage);
//     }
//   }
// );

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async (newContact, thunkApi) => {
    try {
      const result = await axios.post('/contacts', newContact);

      return result.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const result = await axios.delete(`/contacts/${id}`);
      return result.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);
