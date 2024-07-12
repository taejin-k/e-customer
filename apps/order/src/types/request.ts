import { CartType } from './order';

export interface AddCartRequest extends CartType {}

export interface RemoveCartRequest {
  productNo: number;
}

export interface ModifyCartRequest {
  productNo: number;
  count: number;
}
