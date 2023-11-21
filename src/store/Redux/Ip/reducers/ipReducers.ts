import {PayloadAction} from '@reduxjs/toolkit';
import {IpState} from '../../../Models/ip';

const ipReducers = {
  setAppIp: (state: IpState, action: PayloadAction<{ip: string}>) => {
    state.ip = action.payload.ip;
  },
};

export default ipReducers;
