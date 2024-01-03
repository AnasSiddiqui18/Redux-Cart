import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cartItems: [],
};

const initialPrice = {
  1: 1099,
  2: 649,
  3: 9999,
  4: 899,
  5: 999,
  6: 5999,
  7: 1599,
  8: 3699,
};

// eslint-disable-next-line react-refresh/only-export-components
const Cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state, action) {
      /* console.log(action); */ //? logging the action
      state.isCartOpen = action.payload; //? this action.payload contains true and false to toggle the cart
    },

    addItem(state, action) {
      const newItemid = action.payload.id;
      console.log(action.payload); //? this action.payload contains the item passed when the addtocart button clicked

      const existingItem = state.cartItems.find(
        (item) => item.id === newItemid
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice =
          existingItem.quantity * initialPrice[newItemid];
      } else {
        state.cartItems.push(action.payload);
      }
    },

    // Inside your reducer or state management code

    incrementItem(state, action) {
      const { itemIndex, itemId } = action.payload;
      const item = state.cartItems[itemIndex];

      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * initialPrice[itemId];
      }
    },

    decrementItem(state, action) {
      const { itemIndex, itemId } = action.payload;
      const item = state.cartItems[itemIndex];

      if (item && item.quantity > 1) {
        item.quantity--;
        item.totalPrice = item.quantity * initialPrice[itemId]; // Update total price based on new quantity
      }
    },

    emptyCart(state) {
      state.cartItems = [];
    },
  },
});

export const {
  toggleCart,
  addItem,
  incrementItem,
  decrementItem,
  incrementPrice,
  decrementPrice,
  emptyCart,
} = Cartslice.actions;
export default Cartslice.reducer;
