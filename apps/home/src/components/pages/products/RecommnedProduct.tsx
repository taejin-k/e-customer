import { CartIcon, Text } from '@29cm/ui-emotion';
import { vars } from '@29cm/ui-tokens';
import styled from '@emotion/styled';
import { default as NextImage } from 'next/image';
import { forwardRef } from 'react';
import { NEXT_IMAGE_SIZES } from 'src/constants/image';
import { useAddCartMutation, useRemoveCartMutation } from 'src/quries/homeQuery';
import { NewRecommendedProductType } from 'src/types/products';
import { omit } from 'src/utils/common';
import { formatNumberWithCommas } from 'src/utils/number';

interface ProductProps {
  recommendedProduct: NewRecommendedProductType;
}

const RecommnedProduct = forwardRef<HTMLDivElement, ProductProps>(({ recommendedProduct }, ref) => {
  const { imageUrl, availableCoupon, productName, price, isAddedCart } = recommendedProduct;

  const { mutate: addCart, isPending: addPending } = useAddCartMutation();
  const { mutate: removeCart, isPending: removePending } = useRemoveCartMutation();

  const handleToggleCart = (recommendedProduct: NewRecommendedProductType, isPending: boolean) => {
    if (isPending) return;

    const recommendCode = recommendedProduct.recommendCode;
    const productNo = recommendedProduct.productNo;

    if (!isAddedCart) addCart({ ...omit(recommendedProduct, ['isAddedCart']), recommendCode, count: 1 });
    else removeCart({ productNo: [productNo] });
  };

  return (
    <Container ref={ref}>
      <ImageWrapper>
        <Image src={imageUrl} fill sizes={NEXT_IMAGE_SIZES} priority alt={productName} />
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
        <IconBox onClick={() => handleToggleCart(recommendedProduct, addPending || removePending)}>
          <CartIcon width={18} height={18} isEmpty={!isAddedCart} />
        </IconBox>
      </InfoWrapper>
    </Container>
  );
});

export default RecommnedProduct;

const Container = styled.div`
  flex: 0 0 50%;
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
