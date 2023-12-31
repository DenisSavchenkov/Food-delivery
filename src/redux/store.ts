import { configureStore } from '@reduxjs/toolkit';
import getProductsReducer from './slices/getProductsSlice';
import filterReducer from './slices/filterSlice';
import cartReducer from './slices/cartSlice';
import getProductReducer from './slices/getProductSlice';

export const store = configureStore({
  reducer: {
    getProducts: getProductsReducer,
    getProduct: getProductReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
