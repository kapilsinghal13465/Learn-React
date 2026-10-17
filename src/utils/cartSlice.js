import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanila(older) Redux => Don't Mutate STATE and return was mandatory
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      // Redux Toolkit
      // we Have to mutate the state
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;

      // RTK(Redux Toolkit) - either mutate the state or return a new state
      // return {items: []}
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
