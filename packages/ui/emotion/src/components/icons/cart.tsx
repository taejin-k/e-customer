import styled from '@emotion/styled';
import { memo } from 'react';

type CartProps = {
  width?: number;
  height?: number;
  isEmpty?: boolean;
};

export const CartIcon = memo(({ width, height, isEmpty = false }: CartProps) => (
  <CartIconContainer $width={width} $height={height}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      {isEmpty ? (
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
      ) : (
        <path
          fillRule="evenodd"
          d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
        />
      )}
    </svg>
  </CartIconContainer>
));

const CartIconContainer = styled.span<{ $width?: number; $height?: number }>`
  ${({ $width }) => $width && `width: ${$width}px`};
  ${({ $height }) => $height && `height: ${$height}px`};

  svg {
    width: 100%;
    height: 100%;
  }
`;
