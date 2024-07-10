import { BannerType, CartType, FeedType, GateType } from './home';

export interface BaseResponse {
  errors: {
    code: number;
    message: string;
  };
  code: number;
  message: string;
}

export interface BannersResponse extends BaseResponse {
  data: BannerType[];
}

export interface GatesResponse extends BaseResponse {
  data: GateType[];
}

export interface FeedsResponse extends BaseResponse {
  data: FeedType[];
}

export interface CartResponse extends BaseResponse {
  data: CartType[];
}
