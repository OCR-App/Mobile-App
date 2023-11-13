import axois, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

export default class HttpService {
  private readonly baseURL: string;
  private static _instance: AxiosInstance;

  constructor() {
    this.baseURL = '';
  }

  public static build() {
    if (!this._instance) {
      this._instance = axois.create({
        baseURL: '',
        timeout: 30000,
      });
      this._instance.interceptors.response.use(
        function (response) {
          return response;
        },
        async function (error) {
          return Promise.reject(error);
        },
      );
    }
    return new HttpService();
  }

  public get<T, R = AxiosResponse<T>>(
    endpoint: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return HttpService._instance.get(`${this.baseURL}${endpoint}`, config);
  }

  public post<T, B, R = AxiosResponse<T>>(
    endpoint: string,
    data?: B,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return HttpService._instance.post(
      `${this.baseURL}${endpoint}`,
      data,
      config,
    );
  }

  public put<T, B, R = AxiosResponse<T>>(
    endpoint: string,
    data?: B,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return HttpService._instance.put(
      `${this.baseURL}${endpoint}`,
      data,
      config,
    );
  }

  public patch<T, B = {}, R = AxiosResponse<T>>(
    endpoint: string,
    data?: B,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return HttpService._instance.patch(
      `${this.baseURL}${endpoint}`,
      data,
      config,
    );
  }

  public delete<T, R = AxiosResponse<T>>(
    endpoint: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return HttpService._instance.delete(`${this.baseURL}${endpoint}`, config);
  }
}
