import {createSlice} from '@reduxjs/toolkit';
import {LangState} from '../../Models/lang';
import langReducers from './reducers/langReducers';

const initialState: LangState = {
  lang: 'english',
};

const LangSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    ...langReducers,
  },
});

export const {setAppLang} = LangSlice.actions;

export default LangSlice.reducer;
