import { useState } from 'react';
import { useAddCartMutation, useRemoveCartMutation } from 'src/quries/homeQuery';
import { CartType } from 'src/types/home';
import { RecommendedProductType } from 'src/types/products';

interface UseCartProps {
  carts: CartType[];
  productNo: number;
}

const useCart = ({ carts, productNo }: UseCartProps) => {
  const [isAddedCart, setIsAddedCart] = useState(() => carts.some((cart) => cart.productNo === productNo));

  const { mutate: addCart, isPending: addPending } = useAddCartMutation(handleToggleCartSuccess);
  const { mutate: removeCart, isPending: removePending } = useRemoveCartMutation(handleToggleCartSuccess);

  function handleToggleCartSuccess() {
    setIsAddedCart((prev) => !prev);
  }

  const handleClickCart = (product: RecommendedProductType) => {
    if (addPending || removePending) return;

    if (!isAddedCart) addCart({ ...product, count: 1 });
    else removeCart({ productNo: product.productNo });
  };

  return { isAddedCart, handleClickCart };
};

export default useCart;
