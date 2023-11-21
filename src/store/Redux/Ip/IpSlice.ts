import {createSlice} from '@reduxjs/toolkit';
import {IpState} from '../../Models/ip';
import ipReducers from './reducers/ipReducers';

const initialState: IpState = {
  ip: '',
};

const IpSlice = createSlice({
  name: 'ip',
  initialState,
  reducers: {
    ...ipReducers,
  },
});

export const {setAppIp} = IpSlice.actions;

export default IpSlice.reducer;
