import { Button, CommonLayout, Text } from '@29cm/ui-emotion';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { GoBack } from 'src/components/commons/GoBack';
import CartProduct from 'src/components/pages/order/CartProduct';
import CheckBox from 'src/components/pages/order/CheckBox';
import NoData from 'src/components/pages/order/NoData';
import Payment from 'src/components/pages/order/Payment';
import RecommnedProduct from 'src/components/pages/order/RecommnedProduct';
import RecommendProductSkeleton from 'src/components/skeletons/RecommendProductSkeleton';
import { LIMIT_RECOMMENDED_PRODUCTS } from 'src/constants/api';
import {
  useCartsQuery,
  useCouponsQuery,
  useModifyCartMutation,
  useRecommendedProductsQuery,
  useRemoveCartMutation,
} from 'src/quries/orderQuery';
import {
  CartType,
  CouponSortType,
  CouponType,
  CouponedProductNoType,
  NewRecommendedProductType,
} from 'src/types/order';
import { getKeys } from 'src/utils/common';

export default function Order() {
  const targetRef = useRef<HTMLDivElement>(null);

  const [perPage, setPerPage] = useState(10);
  const [checkedProductNos, setCartProductNos] = useState<number[]>([]);
  const [couponedProductNo, setCouponedProductNo] = useState<CouponedProductNoType>({
    rate: null,
    amount: null,
  });

  const { data: carts = [], isLoading: cartsLoading } = useCartsQuery();
  const { data: recommendedProducts = [], isLoading: recommendedProductsLoading } =
    useRecommendedProductsQuery(perPage);
  const { data: coupons = [] } = useCouponsQuery();
  const { mutate: modifyCart } = useModifyCartMutation();
  const { mutateAsync: removeCart } = useRemoveCartMutation();

  const checkedProduct = carts.filter((cart) => checkedProductNos.includes(cart.productNo));

  const newRecommendedProducts: NewRecommendedProductType[] = recommendedProducts.map((recommendedProduct) => ({
    ...recommendedProduct,
    isAddedCart: carts.some((cart) => cart.productNo === recommendedProduct.productNo),
  }));

  const getLastPrice = (price: number, count: number, selectedCoupon?: CouponSortType, currentCoupon?: CouponType) => {
    const multipliedPrice = price * count;

    const currentDiscountAmount = currentCoupon?.discountAmount || 0;
    const currentDiscountRate = currentCoupon?.discountRate || 0;

    const amountDiscount = currentDiscountAmount;
    const rateDiscount = multipliedPrice * 0.01 * currentDiscountRate;

    const discount = selectedCoupon === 'amount' ? amountDiscount : selectedCoupon === 'rate' ? rateDiscount : 0;

    return multipliedPrice - discount;
  };

  const getPaymentAmount = (
    checkedProduct: CartType[],
    couponedProductNo: CouponedProductNoType,
    coupons: CouponType[],
  ) => {
    return checkedProduct.reduce((total, cart) => {
      const { price, count, productNo } = cart;

      const selectedCoupon = getKeys(couponedProductNo).find((key) => couponedProductNo[key] === productNo);
      const currentCoupon = coupons.find((coupon) => coupon.couponType === selectedCoupon);

      const lastPrice = getLastPrice(price, count, selectedCoupon, currentCoupon);

      return total + lastPrice;
    }, 0);
  };

  const getIsChecked = (cart: CartType, checkedProductNos: number[]) => {
    return checkedProductNos.some((productNo) => productNo === cart.productNo);
  };

  const getIsAllChecked = (carts: CartType[], checkedProductNos: number[]) => {
    return checkedProductNos.length === carts.length;
  };

  const handleChecked = (cart: CartType, checked: boolean) => {
    const { productNo } = cart;

    if (checked) setCartProductNos((productNos) => [...productNos, cart.productNo]);
    else setCartProductNos((productNos) => productNos.filter((num) => num !== productNo));
  };

  const handleAllChecked = (carts: CartType[], checked: boolean) => {
    const cartProductNos = carts.map((cart) => cart.productNo);

    setCartProductNos(checked ? cartProductNos : []);
  };

  const handleModifyCartCount = (productNo: number, count: number) => {
    modifyCart({ productNo, count });
  };

  const handleRemoveCart = async (productNo: number, couponType?: CouponSortType) => {
    await removeCart({ productNo: [productNo] });

    setCartProductNos((productNos) => productNos.filter((num) => num !== productNo));

    if (couponType) setCouponedProductNo((state) => ({ ...state, [couponType]: null }));
  };

  const handleRemoveSelectedCart = async (checkedCartProductNos: number[]) => {
    await removeCart({ productNo: checkedCartProductNos });

    setCartProductNos([]);
  };

  const handleUseCoupon = (couponType: CouponSortType, productNo: number) => {
    const anotherCouponType = couponType === 'rate' ? 'amount' : 'rate';
    const anotherCouponProductNo = couponedProductNo[anotherCouponType];
    const anotherProductNo = anotherCouponProductNo === productNo ? null : anotherCouponProductNo;

    setCouponedProductNo((state) => ({ ...state, [couponType]: productNo, [anotherCouponType]: anotherProductNo }));
  };

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const target = entries[0];

      if (target.isIntersecting) {
        setPerPage((state) => state + 10);
        observer.unobserve(target.target);
      }
    };

    const observer = new IntersectionObserver(handleObserver);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, [recommendedProducts]);

  return (
    <CommonLayout prefix={<GoBack size={22} />} title="장바구니">
      <CartWrapper>
        {!cartsLoading &&
          (carts.length ? (
            <>
              <AllCheckBox>
                <CheckBoxArea>
                  <CheckBox
                    checked={getIsAllChecked(carts, checkedProductNos)}
                    onChange={(checked) => handleAllChecked(carts, checked)}
                  />
                  <Text color="primary" typography="text-m-medium">
                    전체선택({checkedProductNos.length}/{carts.length})
                  </Text>
                </CheckBoxArea>
                <Button variant="tertiary" size="xSmall" onClick={() => handleRemoveSelectedCart(checkedProductNos)}>
                  선택삭제
                </Button>
              </AllCheckBox>

              <CartProductBox>
                {carts.map((cart) => (
                  <CartProduct
                    key={cart.productNo}
                    cart={cart}
                    coupons={coupons}
                    couponProductNo={couponedProductNo}
                    isChecked={getIsChecked(cart, checkedProductNos)}
                    getLastPrice={getLastPrice}
                    onChecked={handleChecked}
                    onModifyCartCount={handleModifyCartCount}
                    onRemoveCart={handleRemoveCart}
                    onUseCoupon={handleUseCoupon}
                  />
                ))}
              </CartProductBox>
            </>
          ) : (
            <NoData />
          ))}
      </CartWrapper>

      <Divider />

      <Title>
        <Text typography="text-xxl-bold" color="primary">
          지원자님을 위한 추천상품
        </Text>
      </Title>

      <ProductWrapper>
        {newRecommendedProducts?.map((recommendedProduct, index, array) => (
          <RecommnedProduct
            key={recommendedProduct.productNo}
            recommendedProduct={recommendedProduct}
            ref={index === array.length - 1 ? targetRef : null}
          />
        ))}
        {recommendedProductsLoading &&
          [...Array(LIMIT_RECOMMENDED_PRODUCTS)].map((_, index) => <RecommendProductSkeleton key={index} />)}
      </ProductWrapper>

      <Payment
        checkedCarts={checkedProduct}
        totalPaymentAmount={getPaymentAmount(checkedProduct, couponedProductNo, coupons)}
      />
    </CommonLayout>
  );
}

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 12px;
  transition: 0.5s;
  min-height: 189px;
`;

const AllCheckBox = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  justify-content: space-between;
`;

const CartProductBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CheckBoxArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Divider = styled.div`
  height: 10px;
  background: #f4f4f4;
`;

const Title = styled.div`
  padding: 20px 20px 12px;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
