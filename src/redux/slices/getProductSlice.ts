import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../../Types';

export const fetchProduct = createAsyncThunk<Product, string | undefined>(
  'GET_PRODUCT',
  async (id) => {
    try {
      const { data } = await axios.get(
        `https://651811de582f58d62d355bdb.mockapi.io/products/${id}`
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

interface getProductState {
  product: Product;
  isLoading: boolean;
}

const initialState: getProductState = {
  product: {},
  isLoading: false,
};

const getProductSlice = createSlice({
  name: 'produсt',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(
        fetchProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.isLoading = false;
          state.product = action.payload;
        }
      ),
      builder.addCase(fetchProduct.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default getProductSlice.reducer;
