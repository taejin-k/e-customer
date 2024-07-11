import { CommonLayout } from '@29cm/ui-emotion';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { GoBack } from 'src/components/commons/GoBack';
import RecommnedProduct from 'src/components/pages/products/RecommnedProduct';
import { useCartsQuery } from 'src/quries/homeQuery';
import { useRecommendedProductsQuery } from 'src/quries/productsQuery';
import { NewRecommendedProductType } from 'src/types/products';

export default function Products() {
  const router = useRouter();
  const { recommendCode } = router.query;

  const targetRef = useRef<HTMLDivElement>(null);

  const { data: carts = [] } = useCartsQuery();
  const {
    data: recommendedProducts = [],
    fetchNextPage,
    hasNextPage,
  } = useRecommendedProductsQuery({
    recommendCode: Number(recommendCode),
  });

  const newRecommendedProducts: NewRecommendedProductType[] = recommendedProducts.map((recommendedProduct) => ({
    ...recommendedProduct,
    isAddedCart: carts.some((cart) => cart.productNo === recommendedProduct.productNo),
  }));

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const target = entries[0];

      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
        observer.unobserve(target.target);
      }
    };

    const observer = new IntersectionObserver(handleObserver);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, [recommendedProducts, hasNextPage, fetchNextPage]);

  return (
    <CommonLayout prefix={<GoBack size={22} />} title="지원자님을 위한 추천상품" cartCount={carts?.length || 0}>
      <Container>
        {newRecommendedProducts?.map((recommendedProduct, index, array) => (
          <RecommnedProduct
            key={recommendedProduct.productNo}
            recommendedProduct={recommendedProduct}
            ref={index === array.length - 1 ? targetRef : null}
          />
        ))}
      </Container>
    </CommonLayout>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
