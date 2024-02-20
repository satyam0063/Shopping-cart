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

interface PriceRange {
  min: 0;
  max: 0;
}

interface ProductState {
  products: Product[];
  categories: string[];
  selectedCategory: string;
  filterByPrice: boolean;
  priceRange: PriceRange;
}

const initialState: ProductState = {
  products: [],
  categories: [],
  priceRange: {
    min: 0,
    max: 0,
  },
  selectedCategory: "",
  filterByPrice: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setAllProducts: (state: any, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setCategories: (state: any, action: PayloadAction<ProductState>) => {
      state.categories = action.payload;
    },
    setSelectedCategory: (state: any, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setFilterByPrice: (state: any, action: PayloadAction<boolean>) => {
      state.filterByPrice = action.payload;
    },
    setMinPrice: (state: any, action: PayloadAction<number>) => {
      state.priceRange.min = action.payload;
    },
    setMaxPrice: (state: any, action: PayloadAction<number>) => {
      state.priceRange.max = action.payload;
    },
    sortProducts: (state: any, action: PayloadAction<string>) => {
      if (action.payload === "price-asc") {
        state.products = state.products.sort(
          (a: any, b: any) => a.price - b.price
        );
      } else if (action.payload === "price-desc") {
        state.products = state.products.sort(
          (a: any, b: any) => b.price - a.price
        );
      } else {
        state.products = state.products.sort(
          (a: any, b: any) => a.title - b.title
        );
      }
    },
  },
});

export const {
  setAllProducts,
  setCategories,
  setSelectedCategory,
  setFilterByPrice,
  setMinPrice,
  setMaxPrice,
  sortProducts,
} = productSlice.actions;

export default productSlice.reducer;
