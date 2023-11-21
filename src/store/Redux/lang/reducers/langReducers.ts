import {PayloadAction} from '@reduxjs/toolkit';
import {LangState} from '../../../Models/lang';

const langReducers = {
  setAppLang: (
    state: LangState,
    action: PayloadAction<{lang: 'english' | 'persian' | 'custom'}>,
  ) => {
    state.lang = action.payload.lang;
  },
};

export default langReducers;
