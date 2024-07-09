import type { MouseEvent } from 'react';

export type ProductCardProps = {
  productName: string;
  priceText: string;
  imageUrl: string;
  availableCoupon?: boolean;
  inCart?: boolean;
  onClick?: (event: MouseEvent<HTMLSpanElement>) => void;
};
