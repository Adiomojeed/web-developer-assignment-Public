/** @format */

import axios, { type AxiosRequestConfig } from "axios";

const Request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 30000,
});

const requestConfiguration = (config: AxiosRequestConfig) => {
  return config;
};

// @ts-ignore
Request?.interceptors?.request?.use(requestConfiguration, (error) => {
  return Promise.reject(error);
});

const handleError = (error: any) => {
  return Promise.reject(error?.response?.data?.message);
};

Request?.interceptors?.response?.use(
  async (response) => {
    return response.data;
  },
  async (error) => {
    await handleError(error);
  },
);

export { Request };
