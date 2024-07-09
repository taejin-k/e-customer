import { BannersResponse, FeedsResponse, GatesResponse } from 'src/types/response';
import axiosInstance from './axiosInstance';

export const getBannersAPI = async () => {
  const response = await axiosInstance.get<BannersResponse>('/api/banners');

  if (response.status === 200) return response.data.data;
  else throw response.data.code;
};

export const getGatesAPI = async () => {
  const response = await axiosInstance.get<GatesResponse>('/api/gates');

  if (response.status === 200) return response.data.data;
  else throw response.data.code;
};

export const getFeedsAPI = async () => {
  const response = await axiosInstance.get<FeedsResponse>('/api/feeds');

  if (response.status === 200) return response.data.data;
  else throw response.data.code;
};
