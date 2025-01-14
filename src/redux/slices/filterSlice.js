import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryName: 'all',
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryName(state, action) {
      state.categoryName = action.payload;
    },
    setSortType(state, action) {
      state.sort = action.payload
    }
  },
});

export const { setCategoryName, setSortType } = filterSlice.actions;

export default filterSlice.reducer;
