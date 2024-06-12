import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
      return state;
    },
    addCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      console.log(action);
    },
    deleteFromCart: (state, action) => {
      const index = state.cart.findIndex((el) => el.id == action.payload.id);
      state.cart.splice(index, 1);
      return state;
    },
    editCart: (state, action) => {
      const index = state.cart.findIndex((el) => el.id == action.payload.id);
      state.cart[index] = action.payload;
      return state;
    },
  },
});

export const { setCart, addCart, deleteFromCart, editCart } = cartSlice.actions;
