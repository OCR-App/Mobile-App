import {Platform} from 'react-native';
import {Image, Options} from 'react-native-image-crop-picker';

export const avatarOptions = {
  width: 1000,
  height: 1000,
  cropping: true,
  multiple: false,
  mediaType: 'photo',
  showCropFrame: true,
  compressImageQuality: 1,
  cropperCircleOverlay: true,
} as Options;

export const imageOptions = {
  cropping: true,
  multiple: false,
  mediaType: 'photo',
  showCropFrame: true,
  compressImageQuality: 0.5,
  includeBase64: true,
  cropperActiveWidgetColor: '#2E8B57',
} as Options;

export const videoOptions = {
  mediaType: 'video',
} as Options;

export const imagePathParser = (image: Partial<Image>) =>
  Platform.OS === 'ios' ? image?.path?.replace('file://', '/') : image?.path;
