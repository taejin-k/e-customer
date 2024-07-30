import { BASE_URL } from 'src/constants/api';
import { AddCartRequest, RemoveCartRequest } from 'src/types/request';
import { BannersResponse, CartResponse, FeedsResponse, GatesResponse } from 'src/types/response';
import axiosInstance from './axiosInstance';

export const getBannersAPI = async () => {
  const response = await fetch(`${BASE_URL}/api/banners`);
  const data: BannersResponse = await response.json();

  return data.data;
};

export const getGatesAPI = async () => {
  const response = await fetch(`${BASE_URL}/api/gates`);
  const data: GatesResponse = await response.json();

  return data.data;
};

export const getFeedsAPI = async () => {
  const response = await fetch(`${BASE_URL}/api/feeds`);
  const data: FeedsResponse = await response.json();

  return data.data;
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
