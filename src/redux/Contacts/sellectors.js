import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;
export const selectFilter = state => state.filter;

export const filteredContacts = createSelector(
  [selectContacts, selectFilter],
  (items, filterValue) => {
    if (filterValue !== undefined) {
      return items.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.filter.toLowerCase())
      );
    }
  }
);
