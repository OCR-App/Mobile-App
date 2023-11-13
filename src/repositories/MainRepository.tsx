import URLs from '../adapter/axios/URLs';
import RNFetchBlob from 'react-native-blob-util';

export const uploadImage = async (image: string) => {
  const baseURL = '';

  console.log(image);
  return await RNFetchBlob.fetch(
    'POST',
    baseURL + URLs.SEND_PIC,
    {
      'Content-Type': 'multipart/form-data',
    },
    [
      {
        name: 'image',
        type: 'image/png',
        filename: 'avatar.png',
        data: image,
      },
    ],
  );
};
