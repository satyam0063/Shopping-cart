"use client";
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
  quantity: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice: any = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initializeCartProduct: (state, action) => {
      state.items = action.payload;
    },
    addCartProducts: (state, action) => {
      const newItem = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingIndex !== -1) {
        // If the item already exists, update it
        state.items[existingIndex] = {
          ...state.items[existingIndex],
          quantity: newItem.quantity + state.items[existingIndex].quantity,
        };
      } else {
        // If the item doesn't exist, add it
        state.items.push(newItem);
      }
      localStorage.setItem("cartProducts", JSON.stringify(state.items));
    },
    removeCartProducts: (state, action) => {
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload
      );
      localStorage.setItem("cartProducts", JSON.stringify(state.items));
    },
    increment: (state, action) => {
      console.log(state.items);

      state.items.map((itm: any) =>
        itm.id === action.payload ? { ...itm, quantity: ++itm.quantity } : itm
      );
      localStorage.setItem("cartProducts", JSON.stringify(state.items));
    },
    decrement: (state, action) => {
      state.items.map((itm: any) =>
        itm.id === action.payload ? { ...itm, quantity: --itm.quantity } : itm
      );
      localStorage.setItem("cartProducts", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      console.log("callled");
      state.items = [];
      localStorage.setItem("cartProducts", JSON.stringify(state.items));
    },
  },
});

export const {
  decrement,
  increment,
  removeCartProducts,
  addCartProducts,
  clearCart,
  initializeCartProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
