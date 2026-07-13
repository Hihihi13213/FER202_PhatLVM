// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './quizSlice';

// Cấu hình Redux store sử dụng configureStore() của Redux Toolkit
const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export default store;
