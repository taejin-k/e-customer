import { CartIcon } from '@29cm/ui-emotion';
import styled from '@emotion/styled';
import Skeleton from 'src/components/commons/Skeleton';

const RecommendProductSkeleton = () => {
  return (
    <Container>
      <Image />
      <InfoWrapper>
        <InfoBox>
          <Title />
          <Price />
        </InfoBox>
        <IconBox>
          <CartIcon width={18} height={18} isEmpty={true} />
        </IconBox>
      </InfoWrapper>
    </Container>
  );
};

export default RecommendProductSkeleton;

const Container = styled.div`
  flex: 0 0 50%;
`;

const Image = styled(Skeleton)`
  width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
`;

const InfoWrapper = styled.div`
  display: flex;
  height: 122px;
  padding: 8px 10px 24px;
  box-sizing: border-box;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 28px;
`;

const Title = styled(Skeleton)`
  width: 130px;
  height: 16px;
  margin-top: 2px;
`;

const Price = styled(Skeleton)`
  width: 100px;
  height: 20px;
`;

const IconBox = styled.button`
  display: flex;
  width: 18px;
  align-self: flex-start;
  cursor: pointer;
`;
