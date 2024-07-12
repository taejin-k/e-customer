import { Button, Text } from '@29cm/ui-emotion';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const NoData = () => {
  const router = useRouter();

  return (
    <Container>
      <Wrapper>
        <Text typography="text-m-bold" color="primary">
          장바구니에 담은 상품이 없어요
        </Text>
        <Button variant="tertiary" size="small" onClick={() => router.push('http://localhost:3000/product/0')}>
          마음에 드는 상품 찾으러 가기
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
