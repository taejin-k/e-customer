import { Button, CommonLayout, Text } from '@29cm/ui-emotion';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { GoBack } from 'src/components/commons/GoBack';
import CartProduct from 'src/components/pages/order/CartProduct';
import CheckBox from 'src/components/pages/order/CheckBox';
import NoData from 'src/components/pages/order/NoData';
import RecommnedProduct from 'src/components/pages/order/RecommnedProduct';
import {
  useCartsQuery,
  useCouponsQuery,
  useModifyCartMutation,
  useRecommendedProductsQuery,
  useRemoveCartMutation,
} from 'src/quries/orderQuery';
import { CartType, CouponSortType, NewRecommendedProductType } from 'src/types/order';

export default function Order() {
  const targetRef = useRef<HTMLDivElement>(null);

  const [perPage, setPerPage] = useState(10);
  const [checkedCarts, setCheckedCarts] = useState<CartType[]>([]);
  const [couponProductNo, setCouponProductNo] = useState<{ [key: string]: number | null }>({});

  const { data: carts = [] } = useCartsQuery();
  const { data: recommendedProducts = [] } = useRecommendedProductsQuery(perPage);
  const { data: coupons = [] } = useCouponsQuery();
  const { mutate: modifyCart } = useModifyCartMutation();
  const { mutateAsync: removeCart } = useRemoveCartMutation();

  const newRecommendedProducts: NewRecommendedProductType[] = recommendedProducts.map((recommendedProduct) => ({
    ...recommendedProduct,
    isAddedCart: carts.some((cart) => cart.productNo === recommendedProduct.productNo),
  }));

  const getIsChecked = (cart: CartType, checkedCarts: CartType[]) => {
    return checkedCarts.some((checkedCart) => checkedCart.productNo === cart.productNo);
  };

  const getIsAllChecked = (carts: CartType[], checkedCarts: CartType[]) => {
    return checkedCarts.length === carts.length;
  };

  const handleAllChecked = (checked: boolean) => {
    setCheckedCarts(checked ? carts : []);
  };

  const handleChecked = (cart: CartType, checked: boolean) => {
    const { productNo } = cart;

    if (checked) setCheckedCarts((state) => [...state, cart]);
    else setCheckedCarts((state) => state.filter((cart) => cart.productNo !== productNo));
  };

  const handleModifyCartCount = (productNo: number, count: number) => {
    modifyCart({ productNo, count });
  };

  const handleRemoveCart = async (productNo: number, couponType: CouponSortType) => {
    await removeCart({ productNo });

    setCheckedCarts((state) => state.filter((cart) => cart.productNo !== productNo));

    if (couponType) setCouponProductNo((state) => ({ ...state, [couponType]: null }));
  };

  const handleUseCoupon = (couponType: CouponSortType, productNo: number) => {
    const anotherCouponType = couponType === 'rate' ? 'amount' : 'rate';
    const anotherCouponProductNo = couponProductNo[anotherCouponType];
    const anotherProductNo = anotherCouponProductNo === productNo ? null : anotherCouponProductNo;

    setCouponProductNo((state) => ({ ...state, [couponType]: productNo, [anotherCouponType]: anotherProductNo }));
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
        {carts.length ? (
          <>
            <AllCheckBox>
              <CheckBoxArea>
                <CheckBox checked={getIsAllChecked(carts, checkedCarts)} onChange={handleAllChecked} />
                <Text color="primary" typography="text-m-medium">
                  전체선택({checkedCarts.length}/{carts.length})
                </Text>
              </CheckBoxArea>
              <Button variant="tertiary" size="xSmall">
                선택삭제
              </Button>
            </AllCheckBox>

            <CartProductBox>
              {carts.map((cart) => (
                <CartProduct
                  key={cart.productNo}
                  cart={cart}
                  coupons={coupons}
                  couponProductNo={couponProductNo}
                  isChecked={getIsChecked(cart, checkedCarts)}
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
        )}
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
      </ProductWrapper>
    </CommonLayout>
  );
}

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 12px;
  min-height: 188px;
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
