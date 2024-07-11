import { RelatedProductType } from './home';

export interface RecommendedProductType extends RelatedProductType {
  recommendCode: number;
}

export interface NewRecommendedProductType extends RelatedProductType {
  recommendCode: number;
  isAddedCart: boolean;
}
