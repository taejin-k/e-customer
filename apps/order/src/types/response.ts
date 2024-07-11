import { CartType, RecommendedProductType } from './order';

export interface BaseResponse {
  errors: {
    code: number;
    message: string;
  };
  code: number;
  message: string;
}

export interface CartResponse extends BaseResponse {
  data: CartType[];
}

export interface RecommendedProductsResponse extends BaseResponse {
  data: RecommendedProductType[];
}
