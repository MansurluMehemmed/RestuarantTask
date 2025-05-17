// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './RestuarantSlice';

const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
  },
});

export default store;
