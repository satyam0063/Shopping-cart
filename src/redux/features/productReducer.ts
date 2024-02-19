import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
}

interface ProductState {
  items: Product[];
}

const initialState: ProductState = {
  items: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setAllProducts: (state: any, action: PayloadAction<ProductState>) => {
      state.items = action.payload;
    },
  },
});

export const { setAllProducts } = productSlice.actions;

export default productSlice.reducer;
