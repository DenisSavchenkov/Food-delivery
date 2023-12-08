import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../../Types';

export const fetchProducts = createAsyncThunk<Product[], string[]>(
  'GET_PRODUCTS',
  async ([filterCategory, filterSort, filterOrder]) => {
    try {
      const { data } = await axios.get(
        `https://651811de582f58d62d355bdb.mockapi.io/products?sortBy=${filterSort}&order=${filterOrder}${filterCategory}`
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

interface GetProductsState {
  products: Product[];
  isLoading: boolean;
}

const initialState: GetProductsState = {
  products: [],
  isLoading: false,
};

const getProductsSlice = createSlice({
  name: 'prodcuts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.products = action.payload;
        }
      ),
      builder.addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default getProductsSlice.reducer;
