import { RecommendedProductsRequest } from 'src/types/request';
import { RecommendedProductsResponse } from 'src/types/response';
import axiosInstance from './axiosInstance';

export const getRecommendedProductsAPI = async (request: RecommendedProductsRequest) => {
  const { recommendCode, offset, limit, sort = 'DESC' } = request;

  const response = await axiosInstance.get<RecommendedProductsResponse>(
    `/api/products/${recommendCode}?offset=${offset}&limit=${limit}&sort=${sort}`,
  );

  if (!response.data.errors) return response.data.data;
  else throw response.data.code;
};
