import {createSlice} from '@reduxjs/toolkit';
import {CoreState} from '../../Models/core';
import coreReducer from './reducers/coreReducers';

const initialState: CoreState = {
  isLoading: false,
};

const resHandleSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    ...coreReducer,
  },
});

export const {setIsLoading} = resHandleSlice.actions;

export default resHandleSlice.reducer;
