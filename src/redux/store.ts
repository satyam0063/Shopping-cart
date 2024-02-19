import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import ProductReducer from './features/productReducer';
import CartReducer from './features/cartReducer';

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    product: ProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const UseAppSelector: TypedUseSelectorHook<RootState>  = useSelector;