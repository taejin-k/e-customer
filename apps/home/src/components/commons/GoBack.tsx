import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import ChevronLeftSVG from '../svgs/ChevronLeftSVG';

interface GoBackProps {
  size: number;
  color?: string;
}

export const GoBack = ({ size, color }: GoBackProps) => {
  const router = useRouter();

  return (
    <Container size={size} onClick={() => router.back()}>
      <ChevronLeftSVG size={size} color={color} />
    </Container>
  );
};

const Container = styled.button<{ size: number }>`
  ${({ size }) => css`
    height: ${size}px;
    width: ${size}px;
  `}
`;
