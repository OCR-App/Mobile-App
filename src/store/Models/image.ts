import {Image} from 'react-native';

export interface ImageState {
  lang: 'english' | 'persian';
  image: Image | null;
  editedImage: Image | null;
  imageId: string;
}
