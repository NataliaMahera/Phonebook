import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contactItems; // Повертаємо контакти зі state
export const selectFilter = state => state.filter.filterQuery; // Повертаємо поточний фільтр зі state
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterQuery) => {
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filterQuery.toLowerCase().trim()) ||
        number.includes(filterQuery.toLowerCase().trim())
    );
  }
);
