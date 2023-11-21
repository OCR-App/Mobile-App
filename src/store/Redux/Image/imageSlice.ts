import {createSlice} from '@reduxjs/toolkit';
import imageReducer from './reducers/imageReducers';
import {ImageState} from '../../Models/image';

const initialState: ImageState = {
  image: null,
  lang: 'english',
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

export const {setGivenImage, setAppLang} = ImageSlice.actions;

export default ImageSlice.reducer;
