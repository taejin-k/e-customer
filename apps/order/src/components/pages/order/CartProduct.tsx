import { Text } from '@29cm/ui-emotion';
import { vars } from '@29cm/ui-tokens';
import styled from '@emotion/styled';
import { default as NextImage } from 'next/image';
import { useEffect, useState } from 'react';
import CloseSVG from 'src/components/svgs/CloseSVG';
import { NEXT_IMAGE_SIZES } from 'src/constants/image';
import { CartType, CouponSortType, CouponType } from 'src/types/order';
import { formatNumberWithCommas } from 'src/utils/number';
import CheckBox from './CheckBox';
import { Counter } from './Counter';
import Select from './Select';

interface CartProductProps {
  cart: CartType;
  coupons: CouponType[];
  couponProductNo: { [key: string]: number | null };
  isChecked: boolean;
  getLastPrice: (price: number, count: number, selectedCoupon?: CouponSortType, currentCoupon?: CouponType) => number;
  onChecked: (cart: CartType, checked: boolean) => void;
  onModifyCartCount: (productNo: number, count: number) => void;
  onRemoveCart: (productNo: number, couponType?: CouponSortType) => Promise<void>;
  onUseCoupon: (couponType: CouponSortType, productNo: number) => void;
}

const CartProduct = ({
  cart,
  coupons,
  couponProductNo,
  isChecked,
  getLastPrice,
  onChecked,
  onModifyCartCount,
  onRemoveCart,
  onUseCoupon,
}: CartProductProps) => {
  const { productName, imageUrl, price, count, productNo, availableCoupon } = cart;

  const [selectedCoupon, setSelectedCoupon] = useState<CouponSortType>();

  const selectItems = coupons.map((coupon) => ({
    value: coupon.couponType,
    label: coupon.couponTitle.replace('쿠폰', ''),
  }));

  const currentCoupon = coupons.find((item) => item.couponType === selectedCoupon);

  useEffect(() => {
    if (couponProductNo.rate === productNo) setSelectedCoupon(CouponSortType.rate);
    else if (couponProductNo.amount === productNo) setSelectedCoupon(CouponSortType.amount);
    else setSelectedCoupon(undefined);
  }, [couponProductNo, productNo]);

  return (
    <Container>
      <Title>
        <CheckBox checked={isChecked} onChange={(checked) => onChecked(cart, checked)} />
        <ProductName>
          <Text typography="text-l-bold" color="primary" lineLimit={1}>
            {productName}
          </Text>
        </ProductName>
        <CloseButton onClick={() => onRemoveCart(productNo, selectedCoupon)}>
          <CloseSVG size={18} />
        </CloseButton>
      </Title>

      <Information>
        <ImageWrapper>
          <Image src={imageUrl} fill sizes={NEXT_IMAGE_SIZES} priority alt={productName} />
        </ImageWrapper>
        <InformationWrapper>
          <Text typography="text-s-bold" color="primary">
            {formatNumberWithCommas(price)}원
          </Text>
          <Text typography="text-xs-medium" color="secondary">
            할인적용 : {currentCoupon?.couponTitle || '없음'}
          </Text>
          <Text typography="text-xs-medium" color="secondary">
            배송비 : 29CM 무료배송
          </Text>
        </InformationWrapper>
      </Information>

      <Result>
        <Text typography="text-l-bold" color="primary">
          {formatNumberWithCommas(getLastPrice(price, count, selectedCoupon, currentCoupon))}원
        </Text>
        <ButtonWrpper>
          {availableCoupon && (
            <Select
              items={selectItems}
              selected={selectedCoupon as string}
              placeholder="쿠폰적용"
              width={100}
              onChange={(value) => onUseCoupon(value as CouponSortType, productNo)}
            />
          )}
          <Counter count={count} onModifyCartCount={(count: number) => onModifyCartCount(productNo, count)} />
        </ButtonWrpper>
      </Result>
    </Container>
  );
};

export default CartProduct;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${vars.$semantic.color.border.divider};
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 40px;
`;

const ProductName = styled.div`
  flex: 1;
`;

const CloseButton = styled.button`
  width: 18px;
  height: 18px;
`;

const Information = styled.div`
  display: flex;
  gap: 12px;
`;

const ImageWrapper = styled.div`
  width: 72px;
  aspect-ratio: 1 / 1;
  position: relative;
`;

const Image = styled(NextImage)`
  object-fit: cover;
`;

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Result = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
`;

const ButtonWrpper = styled.div`
  display: flex;
  gap: 4px;
`;
