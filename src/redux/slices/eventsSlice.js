import { createSlice } from "@reduxjs/toolkit";

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, eventType, date, host } = action.payload;
      const newItem = { id, eventType, date, host };
      state.cart.push(newItem);
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = eventsSlice.actions;

export default eventsSlice.reducer;
