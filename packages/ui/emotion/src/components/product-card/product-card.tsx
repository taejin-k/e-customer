import { memo, type MouseEvent } from 'react';
import { CartIcon } from '../icons';
import { Text } from '../text';
import { StyledProductCard } from './product-card.styled';
import type { ProductCardProps } from './product-card.types';

export const ProductCard = memo(
  ({ productName, priceText, imageUrl, availableCoupon = false, inCart = false, onClick }: ProductCardProps) => {
    const handleClickProductCard = (event: MouseEvent<HTMLSpanElement>) => {
      onClick?.(event);
    };

    return (
      <StyledProductCard>
        <div className="product-card-image-box">
          <img src={imageUrl} />
          {availableCoupon ? (
            <Text className="product-card-coupon" color="onWhite" typography="text-xs-medium">
              쿠폰
            </Text>
          ) : null}
        </div>
        <div className="product-card-info-box">
          <div className="product-card-info">
            <Text color="primary" typography="text-l">
              {productName}
            </Text>
            <span onClick={handleClickProductCard}>
              <CartIcon isEmpty={!inCart} />
            </span>
          </div>
          <div className="product-card-price-box">
            <Text color="primary" typography="text-xxl-bold">
              {priceText}
            </Text>
          </div>
        </div>
      </StyledProductCard>
    );
  },
);
