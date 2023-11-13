import HttpService from '../adapter/axios/HttpService';
import URLs from '../adapter/axios/URLs';

const httpService = HttpService.build();

export const sendImage = async () => {
  return await httpService.post(URLs.SEND_PIC);
};
