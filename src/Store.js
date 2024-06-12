import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "../Reducers/Products-reducer";
import { cartSlice } from "../Reducers/Cart-reducer";
import { billSlice } from "../Reducers/Bill-reducer";

export const store = configureStore({
  reducer: {
    app: productsSlice.reducer,
    application: cartSlice.reducer,
    billApp: billSlice.reducer,
  },
});
