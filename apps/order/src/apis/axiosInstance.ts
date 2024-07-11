import axios, { AxiosResponse, isAxiosError } from 'axios';

const axiosInstance = axios.create({
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: unknown) => {
    if (isAxiosError(error)) return error.response;
  },
);

export default axiosInstance;
