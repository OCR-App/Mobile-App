import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import core from './Redux/Core/coreSlice';

const middlewares = getDefaultMiddleware({
  immutableCheck: false,
});

const store = configureStore({
  reducer: {core},
  middleware: middlewares,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
