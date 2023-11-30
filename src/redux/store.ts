import { configureStore } from '@reduxjs/toolkit';
import getProductsReducer from './slices/getProductsSlice';

export const store = configureStore({
  reducer: {
    getProducts: getProductsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
