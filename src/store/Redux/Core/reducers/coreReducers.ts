import {PayloadAction} from '@reduxjs/toolkit';
import {CoreState} from '../../../Models/core';

const resHandleReducers = {
  setIsLoading: (
    state: CoreState,
    action: PayloadAction<{isLoading: boolean}>,
  ) => {
    state.isLoading = action.payload.isLoading;
  },
};

export default resHandleReducers;
