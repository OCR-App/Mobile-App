import RNFetchBlob from 'react-native-blob-util';
import {Image} from 'react-native-image-crop-picker';
import HttpService from '../../adapter/axios/HttpService';
import URLs from '../../adapter/axios/URLs';

const httpService = HttpService.build();

export const uploadImage = async (image: Image, lang: string, ip: string) => {
  const baseURL = `http://${ip}:8000/api/v1/ocr/get-photo/`;
  console.log({baseURL});

  const imageFormData = [
    {
      name: 'image',
      filename: 'image.jpg',
      data: RNFetchBlob.wrap(image?.path),
    },
    {
      name: 'lang',
      data: lang,
    },
  ];

  console.log({imageFormData});

  try {
    const response = await RNFetchBlob.fetch(
      'POST',
      baseURL,
      {
        'Content-Type': 'multipart/form-data',
      },
      imageFormData,
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const confirmImage = async (id: string) => {
  return await httpService.post(URLs.CONFIRM_IMAGE, {uuid: id});
};
