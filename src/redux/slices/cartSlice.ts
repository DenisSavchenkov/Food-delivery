import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface cartProductType {
  imageURL: string;
  title: string;
  weight: number;
  description: string;
  price: number;
  id: string;
  category: string;
  quantity: number;
}

interface CartStateType {
  cartProducts: cartProductType[];
  totalPrice: number;
}

const initialState: CartStateType = {
  cartProducts: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<cartProductType>) => {
      const findedProduct = state.cartProducts.find(
        (product) => product.id === action.payload.id
      );

      if (!findedProduct) {
        state.cartProducts = [...state.cartProducts, action.payload];
      } else {
        findedProduct.quantity++;
      }

      //   Calc total price
      state.totalPrice = state.cartProducts.reduce((sum, obj) => {
        return sum + obj.price * obj.quantity;
      }, 0);
    },

    plusCount: (state, action) => {
      const findedProduct = state.cartProducts.find(
        (product) => product.id === action.payload
      );

      if (findedProduct) {
        findedProduct.quantity++;
      }

      //   Calc total price
      state.totalPrice = state.cartProducts.reduce((sum, obj) => {
        return sum + obj.price * obj.quantity;
      }, 0);
    },

    minusCount: (state, action) => {
      const findedProduct = state.cartProducts.find(
        (product) => product.id === action.payload
      );

      if (findedProduct) {
        findedProduct.quantity--;
      }

      //   Calc total price
      state.totalPrice = state.cartProducts.reduce((sum, obj) => {
        return sum + obj.price * obj.quantity;
      }, 0);
    },

    deleteAllProducts: (state, action) => {
      if (action.payload) {
        state.cartProducts = [];
      }
    },

    deleteCurrentProduct: (state, action) => {
      state.cartProducts = state.cartProducts.filter((product) => {
        return product.id !== action.payload;
      });
    },
  },
});

export const {
  addProduct,
  plusCount,
  minusCount,
  deleteAllProducts,
  deleteCurrentProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
