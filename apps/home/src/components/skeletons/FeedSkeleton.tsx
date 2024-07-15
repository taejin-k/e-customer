import styled from '@emotion/styled';
import Skeleton from '../commons/Skeleton';

const FeedSkeleton = () => {
  return (
    <Container>
      <Wrapper />
      <Button />
    </Container>
  );
};

export default FeedSkeleton;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 20px;
`;

const Wrapper = styled(Skeleton)`
  width: 100%;
  height: 532px;
  border-radius: 12px;
`;

const Button = styled(Skeleton)`
  width: 100%;
  height: 48px;
`;
