import { CartIcon, Text } from '@29cm/ui-emotion';
import { vars } from '@29cm/ui-tokens';
import styled from '@emotion/styled';
import { useQueryClient } from '@tanstack/react-query';
import { default as NextImage } from 'next/image';
import { useState } from 'react';
import { useAddCartMutation, useRemoveCartMutation } from 'src/quries/homeQuery';
import { QUERY_KEY_CART } from 'src/quries/queryKeys';
import { CartType, RelatedProductType } from 'src/types/home';
import { formatNumberWithCommas } from 'src/utils/number';

interface RelatedProductProps {
  relatedProduct: RelatedProductType;
  recommendCode: number;
}

const RelatedProduct = ({ relatedProduct, recommendCode }: RelatedProductProps) => {
  const { imageUrl, productName, price, productNo } = relatedProduct;

  const queryClient = useQueryClient();
  const carts: CartType[] = queryClient.getQueryData(QUERY_KEY_CART.CART_LIST) || [];

  const [isAddedCart, setIsAddedCart] = useState(() => carts.some((cart) => cart.productNo === productNo));

  const { mutate: addCart, isPending: addPending } = useAddCartMutation(handleToggleCartSuccess);
  const { mutate: removeCart, isPending: removePending } = useRemoveCartMutation(handleToggleCartSuccess);

  function handleToggleCartSuccess() {
    queryClient.invalidateQueries({ queryKey: QUERY_KEY_CART.CART_LIST });
    setIsAddedCart((prev) => !prev);
  }

  const handleClickCart = (relatedProduct: RelatedProductType, isAddedCart: boolean, isPending: boolean) => {
    if (isPending) return;

    if (!isAddedCart) addCart({ ...relatedProduct, count: 1, recommendCode });
    else removeCart({ productNo: relatedProduct.productNo });
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
      <IconWrapper onClick={() => handleClickCart(relatedProduct, isAddedCart, addPending || removePending)}>
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
