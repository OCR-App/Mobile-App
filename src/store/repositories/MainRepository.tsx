import RNFetchBlob from 'react-native-blob-util';

export const uploadImage = async (image: string, lang: string) => {
  const baseURL = 'http://192.168.117.242:8000/api/v1/ocr/get-photo/';

  return await RNFetchBlob.fetch(
    'POST',
    baseURL,
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
      {
        name: 'lang',
        data: lang,
      },
    ],
  );
};
