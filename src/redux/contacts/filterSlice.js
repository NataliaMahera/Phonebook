import { createSlice } from '@reduxjs/toolkit';

const initialState = { filterQuery: '' };

export const filterSlice = createSlice({
  name: 'filter', // Ім'я слайсу
  initialState, // Початковий стан редюсера слайсу
  reducers: {
    changeFilter(state, { payload }) {
      // Оновлення значення фільтру на основі переданого (value)
      state.filterQuery = payload;
    },
  },
});

// Генеруэмо екшени
export const { changeFilter } = filterSlice.actions;
// Редюсер слайсу (підключаємо в store)
export const filterReducer = filterSlice.reducer;
