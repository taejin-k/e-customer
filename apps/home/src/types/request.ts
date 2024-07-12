import { CartType } from './home';

export interface AddCartRequest extends CartType {}

export interface RemoveCartRequest {
  productNo: number[];
}

export interface RecommendedProductsRequest {
  recommendCode: number;
  offset?: number;
  limit?: number;
  sort?: 'ASC' | 'DESC';
}
