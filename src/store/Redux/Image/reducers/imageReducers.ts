import {PayloadAction} from '@reduxjs/toolkit';
import {ImageState} from '../../../Models/image';

const imageReducers = {
  setGivenImage: (
    state: ImageState,
    action: PayloadAction<{
      originalImage: any;
      editedImage: any;
      id: string;
    }>,
  ) => {
    state.editedImage = action.payload.editedImage;
    state.image = action.payload.originalImage;
    state.imageId = action.payload.id;
  },
};

export default imageReducers;
