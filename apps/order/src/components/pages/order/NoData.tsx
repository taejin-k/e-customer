import { Text } from '@29cm/ui-emotion';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import ChevronRightSVG from 'src/components/svgs/ChevronRightSVG';

const NoData = () => {
  const router = useRouter();

  return (
    <Container>
      <Wrapper>
        <Text typography="text-m-bold" color="primary">
          장바구니에 담은 상품이 없어요
        </Text>
        <Button onClick={() => router.push('http://localhost:3000/products/0')}>
          마음에 드는 상품 찾으러 가기
          <ChevronRightSVG size={14} />
        </Button>
      </Wrapper>
    </Container>
  );
};

export default NoData;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 10px 8px;
  background: #f4f4f4;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;
