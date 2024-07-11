import { CommonLayout } from '@29cm/ui-emotion';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { GoBack } from 'src/components/commons/GoBack';
import RecommnedProduct from 'src/components/pages/products/RecommnedProduct';
import { useCartsQuery } from 'src/quries/homeQuery';
import { useRecommendedProductsQuery } from 'src/quries/productsQuery';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Products() {
  const router = useRouter();
  const { recommendCode } = router.query;

  const { data: carts = [] } = useCartsQuery();
  const { data: recommendedProducts = [] } = useRecommendedProductsQuery({ recommendCode: Number(recommendCode) });

  return (
    <CommonLayout prefix={<GoBack size={22} />} title="지원자님을 위한 추천상품" cartCount={carts?.length || 0}>
      <Container>
        {recommendedProducts.map((recommendedProduct) => (
          <RecommnedProduct key={recommendedProduct.productNo} product={recommendedProduct} carts={carts} />
        ))}
      </Container>
    </CommonLayout>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
