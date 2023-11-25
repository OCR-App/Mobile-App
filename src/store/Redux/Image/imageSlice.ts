import {createSlice} from '@reduxjs/toolkit';
import imageReducer from './reducers/imageReducers';
import {ImageState} from '../../Models/image';

const initialState: ImageState = {
  image: null,
  editedImage: null,
  imageId: '',
};

const ImageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    ...imageReducer,
  },
});

export const {setGivenImage} = ImageSlice.actions;

export default ImageSlice.reducer;
