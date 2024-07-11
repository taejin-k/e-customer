import { CartIcon, Text } from '@29cm/ui-emotion';
import { vars } from '@29cm/ui-tokens';
import styled from '@emotion/styled';
import { default as NextImage } from 'next/image';
import { forwardRef } from 'react';
import useCart from 'src/hooks/useCart';
import { CartType, RecommendedProductType } from 'src/types/order';
import { formatNumberWithCommas } from 'src/utils/number';

interface ProductProps {
  product: RecommendedProductType;
  carts: CartType[];
}

const RecommnedProduct = forwardRef<HTMLDivElement, ProductProps>(({ product, carts }, ref) => {
  const { imageUrl, availableCoupon, productNo, productName, price } = product;

  const { isAddedCart, handleClickCart } = useCart({ carts, productNo });

  return (
    <Container ref={ref}>
      <ImageWrapper>
        <Image src={imageUrl} fill alt={productName} />
        {availableCoupon && <Coupon>쿠폰</Coupon>}
      </ImageWrapper>
      <InfoWrapper>
        <InfoBox>
          <Title>
            <Text typography="text-l-medium" color="primary" lineLimit={2}>
              {productName}
            </Text>
          </Title>
          <Text typography="text-xxl-bold" color="primary" lineLimit={2}>
            {formatNumberWithCommas(price)}원
          </Text>
        </InfoBox>
        <IconBox onClick={() => handleClickCart(product)}>
          <CartIcon width={18} height={18} isEmpty={!isAddedCart} />
        </IconBox>
      </InfoWrapper>
    </Container>
  );
});

export default RecommnedProduct;

const Container = styled.div`
  flex: 1 1 50%;
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
`;

const Image = styled(NextImage)`
  object-fit: cover;
`;

const Coupon = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 4px 8px;
  color: ${vars.$semantic.color.text.onWhite};
  font-size: ${vars.$semantic.typography['text-xs-medium']};
  background-color: ${vars.$semantic.color.fill.primary};
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: 8px;
  height: 122px;
  padding: 8px 10px 24px;
  box-sizing: border-box;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
`;

const Title = styled.div`
  height: 40px;
`;

const IconBox = styled.button`
  display: flex;
  width: 18px;
  align-self: flex-start;
  cursor: pointer;
`;
