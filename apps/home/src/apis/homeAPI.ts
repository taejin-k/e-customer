import { AddCartRequest, RemoveCartRequest } from 'src/types/request';
import { BannersResponse, CartResponse, FeedsResponse, GatesResponse } from 'src/types/response';
import axiosInstance from './axiosInstance';

export const getBannersAPI = async () => {
  const response = await axiosInstance.get<BannersResponse>('/api/banners');

  if (!response.data.errors) return response.data.data;
  else throw response.data.code;
};

export const getGatesAPI = async () => {
  const response = await axiosInstance.get<GatesResponse>('/api/gates');

  if (!response.data.errors) return response.data.data;
  else throw response.data.code;
};

export const getFeedsAPI = async () => {
  const response = await axiosInstance.get<FeedsResponse>('/api/feeds');

  if (!response.data.errors) return response.data.data;
  else throw response.data.code;
};

export const getCartsAPI = async () => {
  const response = await axiosInstance.get<CartResponse>('/api/cart');

  if (!response.data.errors) return response.data.data;
  else throw response.data.code;
};

export const addCartAPI = async (request: AddCartRequest) => {
  const response = await axiosInstance.post<CartResponse>('/api/cart/add', request);

  if (!response.data.errors) return response.data.data;
  else throw response.data.code;
};

export const removeCartAPI = async (request: RemoveCartRequest) => {
  const response = await axiosInstance.post<CartResponse>('/api/cart/remove', request);

  if (!response.data.errors) return response.data.data;
  else throw response.data.code;
};
