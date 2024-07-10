export interface BannerType {
  bannerNo: number;
  bannerTitle: string;
  bannerContent: string;
  bannerLink: string;
  imageUrl: string;
}

export interface GateType {
  gateId: number;
  gateTitle: string;
  imageUrl: string;
  linkValue: string;
}

export interface FeedType {
  feedNo: number;
  feedTitle: string;
  feedContents: string;
  feedLink: string;
  imageUrl: string;
  relatedProducts: RelatedProductType[];
  recommendCode: number;
}

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
