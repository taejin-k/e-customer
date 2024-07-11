import { AddCartRequest, RemoveCartRequest } from 'src/types/request';
import { CartResponse, RecommendedProductsResponse } from 'src/types/response';
import axiosInstance from './axiosInstance';

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

export const getRecommendedProductsAPI = async () => {
  const response = await axiosInstance.get<RecommendedProductsResponse>(`/api/recommend`);

  if (!response.data.errors) return response.data.data;
  else throw response.data.code;
};
