import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import core from './Redux/Core/coreSlice';
import image from './Redux/Image/imageSlice';

const middlewares = getDefaultMiddleware({
  immutableCheck: false,
});

const store = configureStore({
  reducer: {core, image},
  middleware: middlewares,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
