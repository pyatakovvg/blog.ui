
import axios, { AxiosInstance, CreateAxiosDefaults, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';


export interface IRequest {
  get(url: string, params?: Record<string, any>): Promise<IResult>;
  post<T>(url: string, data: T): Promise<IResult>;
  delete(url: string): Promise<IResult>;
}

interface IResult {
  success: boolean;
  data?: any;
  error?: any;
}


const defaultConfig = {
  timeout: 24000,
  contentType: 'json',
  withCredentials: true,
};


class Request implements IRequest {
  private readonly instance: AxiosInstance;

  constructor(config?: CreateAxiosDefaults) {
    this.instance = axios.create({
      ...defaultConfig,
      ...config,
    });

    this.instance.interceptors.request.use(this._interceptorRequest, this._interceptorError);
    this.instance.interceptors.response.use(this._interceptorResponse, this._interceptorError);
  }

  private _interceptorRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    return config;
  }

  private _interceptorResponse(response: AxiosResponse): AxiosResponse {
    return response;
  }

  private _interceptorError(error: Error): Promise<Error> {
    return Promise.reject(error);
  }

  public async get(url: string, params: Record<string, any> = {}): Promise<IResult> {
    const result = await this.instance.get(url, { params });
    return result.data;
  }

  public async post<T>(url: string, data: T): Promise<IResult> {
    const result = await this.instance.post(url, data);
    return result.data;
  }

  public async delete(url: string): Promise<IResult> {
    const result = await this.instance.delete(url);
    return result.data;
  }
}

export default Request;
