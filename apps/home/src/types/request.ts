import { CartType } from './home';

export interface AddCartRequest extends CartType {}

export interface RemoveCartRequest {
  productNo: number;
}
