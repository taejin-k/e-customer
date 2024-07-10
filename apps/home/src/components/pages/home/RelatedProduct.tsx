import { CartIcon, Text } from '@29cm/ui-emotion';
import { vars } from '@29cm/ui-tokens';
import styled from '@emotion/styled';
import { default as NextImage } from 'next/image';
import { useState } from 'react';
import { RelatedProductType } from 'src/types/home';
import { formatNumberWithCommas } from 'src/utils/number';

interface RelatedProductProps {
  relatedProduct: RelatedProductType;
  onCart: (relatedProduct: RelatedProductType, isAddedCart: boolean, handleToggleCart: () => void) => void;
}

const RelatedProduct = ({ relatedProduct, onCart }: RelatedProductProps) => {
  const { imageUrl, productName, price } = relatedProduct;
  const [isAddedCart, setIsAddedCart] = useState(false);

  const handleToggleCart = () => {
    setIsAddedCart((state) => !state);
  };

  const handleClickCart = (relatedProduct: RelatedProductType, isAddedCart: boolean) => {
    onCart(relatedProduct, isAddedCart, handleToggleCart);
  };

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
      <IconWrapper onClick={() => handleClickCart(relatedProduct, isAddedCart)}>
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
