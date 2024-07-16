import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className }: SkeletonProps) => {
  return <SkeletonWrapper className={className} />;
};

export default Skeleton;

const skeletonAnimation = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

const SkeletonWrapper = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${skeletonAnimation} 2s infinite;
`;
