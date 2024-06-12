import { createSlice } from "@reduxjs/toolkit";

export const billSlice = createSlice({
  name: "bill",
  initialState: {
    bill: [
      { id: 1, totalPrice: 0 },
      { id: 2, totalPrice: 0 },
      { id: 3, totalPrice: 0 },
      { id: 4, totalPrice: 0 },
      { id: 5, totalPrice: 0 },
    ],
  },
  reducers: {
    setBill: (state, action) => {
      state.bill = action.payload;
      return state;
    },
    addBill: (state, action) => {
      state.bill = [...state.bill, action.payload];
      console.log(action);
    },
    editBill: (state, action) => {
      const index = state.bill.findIndex((el) => el.id == action.payload.id);
      state.bill[index] = action.payload;
      return state;
    },
  },
});

export const { setBill, addBill, editBill } = billSlice.actions;
