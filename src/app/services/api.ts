import axios, { AxiosError, AxiosResponse } from "axios";
import { LocalStorageHelper } from "../utils/localStorageHelper";
import { ACCESS_TOKEN, EXPIRED_AT } from "../utils/consts";

export const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "https://0cfd94492cb8.ngrok-free.app";

export const publicInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const privateInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

publicInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

privateInstance.interceptors.request.use(
  (config) => {
    const token = LocalStorageHelper.get(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

privateInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      LocalStorageHelper.remove(ACCESS_TOKEN);
      LocalStorageHelper.remove(EXPIRED_AT);
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
