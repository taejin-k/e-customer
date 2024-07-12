export interface RelatedProductType {
  productNo: number;
  productName: string;
  price: number;
  imageUrl: string;
  availableCoupon: boolean;
  priorityScore: number;
}

export interface CartType extends RelatedProductType {
  recommendCode: number;
  count: number;
}

export interface RecommendedProductType extends RelatedProductType {
  recommendCode: number;
}

export interface NewRecommendedProductType extends RelatedProductType {
  recommendCode: number;
  isAddedCart: boolean;
}

export interface CouponType {
  couponType: CouponSortType;
  couponTitle: string;
  discountRate?: number;
  discountAmount?: number;
}

export type CouponSortType = 'rate' | 'amount' | '';
