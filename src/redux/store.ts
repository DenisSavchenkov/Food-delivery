import { configureStore } from '@reduxjs/toolkit';
import getProductsReducer from './slices/getProductsSlice';
import filterReducer from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    getProducts: getProductsReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
