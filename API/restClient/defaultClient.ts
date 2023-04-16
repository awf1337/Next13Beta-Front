import axios, { AxiosError } from 'axios';

import {
  BasicRequest,
  GetType,
  PatchType,
  PostType,
  RequestPayload,
  RequestResponse,
} from './types';

const axiosClient = axios.create({ baseURL: '/api' });

let authToken = '';

const request = async ({
  url,
  method,
  params,
  data,
  config,
}: RequestPayload) => {
  return axiosClient
    .request({
      url: url,
      method,
      params,
      data,
      headers: {
        authorization: authToken,
        ...config,
      },
    })
    .then((res) => {
      return {
        data: res.data,
        status: 200,
        error: false,
      } as RequestResponse;
    })
    .catch((error: AxiosError) => {
      if (error.response && error.response.data) {
        return {
          error: true,
          // @ts-ignore
          status: error.response.data.statusCode,
          // @ts-ignore
          message: error.response.data.message,
        } as RequestResponse;
      }

      return {
        error: true,
        status: error.status,
        message: error.message,
      } as RequestResponse;
    });
};

export default {
  setBaseUrl(baseUrl: string) {
    axiosClient.defaults.baseURL = baseUrl;
  },
  setToken(token: string | undefined) {
    authToken = `Bearer ${token}`;
  },
  async get({ url, params, config = {} }: GetType) {
    return request({ url, method: 'get', params, config });
  },

  async post({ url, data, config = {} }: PostType) {
    return request({ url, method: 'post', data, config });
  },

  async patch({ url, data, config = {} }: PatchType) {
    return request({ url, method: 'patch', data, config });
  },

  async delete({ url, config = {} }: BasicRequest) {
    return request({ url, method: 'delete', config });
  },
};
