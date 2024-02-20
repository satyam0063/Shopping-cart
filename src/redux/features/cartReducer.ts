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
    // addToCart: (state, action: PayloadAction<Product>) => {
    //   const { id } = action.payload;
    //   const existingItem = state.items.find(item => item.product.id === id);
    //   if (existingItem) {
    //     existingItem.quantity++;
    //   } else {
    //     state.items.push({ product: action.payload, quantity: 1 });
    //   }
    // },
    // removeFromCart: (state, action: PayloadAction<number>) => {
    //   const index = state.items.findIndex(item => item.product.id === action.payload);
    //   if (index !== -1) {
    //     state.items.splice(index, 1);
    //   }
    // },
    // updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
    //   const { id, quantity } = action.payload;
    //   const item = state.items.find(item => item.product.id === id);
    //   if (item) {
    //     item.quantity = quantity;
    //   }
    // },
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
    },
    removeCartProducts: (state, action) => {
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload
      );
    },
    increment: (state, action) => {
      console.log(state.items);

      state.items.map((itm: any) =>
        itm.id === action.payload ? { ...itm, quantity: ++itm.quantity } : itm
      );
    },
    decrement: (state, action) => {
      state.items.map((itm: any) =>
        itm.id === action.payload ? { ...itm, quantity: --itm.quantity } : itm
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  decrement,
  increment,
  removeCartProducts,
  addCartProducts,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
