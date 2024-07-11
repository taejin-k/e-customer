import { CommonLayout } from '@29cm/ui-emotion';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { GoBack } from 'src/components/commons/GoBack';
import RecommnedProduct from 'src/components/pages/order/RecommnedProduct';
import { useCartsQuery, useRecommendedProductsQuery } from 'src/quries/orderQuery';

export default function Order() {
  const targetRef = useRef<HTMLDivElement>(null);

  const [perPage, setPerPage] = useState(10);

  const { data: carts = [] } = useCartsQuery();
  const { data: recommendedProducts } = useRecommendedProductsQuery(perPage);

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
      <Container>
        {recommendedProducts?.map((recommendedProduct, index, array) => (
          <RecommnedProduct
            key={recommendedProduct.productNo}
            product={recommendedProduct}
            carts={carts}
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
