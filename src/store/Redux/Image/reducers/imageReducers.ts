import {PayloadAction} from '@reduxjs/toolkit';
import {Image} from 'react-native-reanimated/lib/typescript/Animated';
import {ImageState} from '../../../Models/image';

const imageReducers = {
  setGivenImage: (
    state: ImageState,
    action: PayloadAction<{
      originalImage: Image;
      editedImage: Image;
      id: string;
    }>,
  ) => {
    state.editedImage = action.payload.editedImage;
    state.image = action.payload.originalImage;
    state.imageId = action.payload.id;
  },
  setAppLang: (
    state: ImageState,
    action: PayloadAction<{lang: 'english' | 'persian'}>,
  ) => {
    state.lang = action.payload.lang;
  },
};

export default imageReducers;
