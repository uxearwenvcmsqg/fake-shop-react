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
			console.log('action gei', action);
      state.categoryName = action.payload;
    },
  },
});

export const { setCategoryName } = filterSlice.actions;

export default filterSlice.reducer;
