import { CartIcon, Text } from '@29cm/ui-emotion';
import { vars } from '@29cm/ui-tokens';
import styled from '@emotion/styled';
import { default as NextImage } from 'next/image';
import useCart from 'src/hooks/useCart';
import { CartType } from 'src/types/home';
import { RecommendedProductType } from 'src/types/products';
import { formatNumberWithCommas } from 'src/utils/number';

interface RelatedProductProps {
  product: RecommendedProductType;
  carts: CartType[];
}

const RelatedProduct = ({ product, carts }: RelatedProductProps) => {
  const { imageUrl, productName, price, productNo } = product;

  const { isAddedCart, handleClickCart } = useCart({ carts, productNo });

  return (
    <Container>
      <Image src={imageUrl} width={60} height={60} alt={productName} />
      <TextWrapper>
        <Text color="primary" typography="text-xs">
          {productName}
        </Text>
        <Text color="primary" typography="text-m-bold">
          {formatNumberWithCommas(price)}원
        </Text>
      </TextWrapper>
      <IconWrapper onClick={() => handleClickCart(product)}>
        <CartIcon width={18} height={18} isEmpty={!isAddedCart} />
      </IconWrapper>
    </Container>
  );
};

export default RelatedProduct;

const Container = styled.div`
  display: flex;
  gap: 16px;
  padding: 12px 12px 12px 0;
  border-top: 1px solid ${vars.$scale.color.gray200};
`;

const Image = styled(NextImage)`
  width: 60px;
  height: 60px;
  border-radius: 2px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
`;

const IconWrapper = styled.button`
  display: flex;
  align-self: center;
  width: 18px;
  cursor: pointer;
`;
