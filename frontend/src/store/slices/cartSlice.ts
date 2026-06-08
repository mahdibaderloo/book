import { createSlice } from "@reduxjs/toolkit";
import type { Book } from "../../types/types";

interface CartItem extends Book {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem("books-cart") || "[]"),
};

const cartSlice = createSlice({
  name: "books-cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }

      localStorage.setItem("books-cart", JSON.stringify(state.items));
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      localStorage.setItem("books-cart", JSON.stringify(state.items));
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);

      if (item) item.quantity++;

      localStorage.setItem("books-cart", JSON.stringify(state.items));
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }

      localStorage.setItem("books-cart", JSON.stringify(state.items));
    },

    clearCart: () => {
      localStorage.removeItem("books-cart");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
