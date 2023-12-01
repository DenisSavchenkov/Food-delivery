import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FilterStateType {
  activeCategory: number;
  activeSort: number;
  orderSort: boolean;
}

const initialState: FilterStateType = {
  activeCategory: 0,
  activeSort: 0,
  orderSort: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<number>) => {
      state.activeCategory = action.payload;
    },

    setActiveSort: (state, action: PayloadAction<number>) => {
      state.activeSort = action.payload;
    },

    setOrderSort: (state, action: PayloadAction<boolean>) => {
      state.orderSort = action.payload;
    },
  },
});

export const { setActiveCategory, setActiveSort, setOrderSort } =
  filterSlice.actions;

export default filterSlice.reducer;
