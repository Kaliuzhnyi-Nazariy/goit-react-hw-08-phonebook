import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addNewContact, deleteContact } from './operations';
import { initialState } from './initialState';

const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addNewContact.pending]: handlePending,
    [addNewContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addNewContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const deletedContactIndex = state.contacts.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.items.splice(deletedContactIndex, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const ContactsReducers = contactSlice.reducer;
