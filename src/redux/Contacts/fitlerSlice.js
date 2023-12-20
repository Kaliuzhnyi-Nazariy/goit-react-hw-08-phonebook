import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    addFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { addFilter } = filterSlice.actions;
