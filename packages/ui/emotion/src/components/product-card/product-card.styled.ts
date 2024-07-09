import { vars } from '@29cm/ui-tokens';
import styled from '@emotion/styled';

export const StyledProductCard = styled.div`
  min-height: 310px;
  display: flex;
  flex-direction: column;

  & .product-card-image-box {
    position: relative;

    & > img {
      width: 100%;
      height: 100%;
      aspect-ratio: 1 / 1;
    }
  }

  & .product-card-coupon {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 4px 8px;
    background-color: ${vars.$semantic.color.text.primary};
  }

  & .product-card-info-box {
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 122.5px;
    padding: 8px 10px;
  }

  & .product-card-info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 40px;

    span:nth-of-type(1) {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    span:nth-of-type(2) {
      cursor: pointer;

      & > span {
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  & .product-card-price-box {
  }
`;
