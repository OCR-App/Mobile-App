import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import core from './Redux/Core/coreSlice';
import image from './Redux/Image/imageSlice';
import lang from './Redux/lang/LangSlice';
import ip from './Redux/Ip/IpSlice';

const middlewares = getDefaultMiddleware({
  immutableCheck: false,
});

const store = configureStore({
  reducer: {core, image, ip, lang},
  middleware: middlewares,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
