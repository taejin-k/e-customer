import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addCartAPI, getCartsAPI, removeCartAPI } from 'src/apis/homeAPI';
import { CartType } from 'src/types/home';
import { AddCartRequest, RemoveCartRequest } from 'src/types/request';
import { QUERY_KEY_CART } from './queryKeys';

export const useCartsQuery = () => {
  const query = useQuery({
    queryKey: QUERY_KEY_CART.CART_LIST,
    queryFn: () => getCartsAPI(),
  });

  return query;
};

export const useAddCartMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (request: AddCartRequest) => addCartAPI(request),
    onMutate: async (newData) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEY_CART.CART_LIST });

      const previousData = queryClient.getQueryData(QUERY_KEY_CART.CART_LIST);

      queryClient.setQueryData(QUERY_KEY_CART.CART_LIST, (oldDatas: CartType[]) => [...oldDatas, newData]);

      return { previousData };
    },
    onError: (err, newData, context) => {
      if (context) {
        queryClient.setQueryData(QUERY_KEY_CART.CART_LIST, context.previousData);
        alert('카트를 추가하는 중 오류가 발생했습니다.');
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY_CART.CART_LIST });
    },
  });

  return mutation;
};

export const useRemoveCartMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (request: RemoveCartRequest) => removeCartAPI(request),
    onMutate: async (request) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEY_CART.CART_LIST });

      const previousData = queryClient.getQueryData(QUERY_KEY_CART.CART_LIST);

      queryClient.setQueryData(QUERY_KEY_CART.CART_LIST, (oldDatas: CartType[]) =>
        oldDatas.filter((data) => !request.productNo.includes(data.productNo)),
      );

      return { previousData };
    },
    onError: (err, removedItem, context) => {
      if (context) {
        queryClient.setQueryData(QUERY_KEY_CART.CART_LIST, context.previousData);
        alert('카트를 삭제하는 중 오류가 발생했습니다.');
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY_CART.CART_LIST });
    },
  });

  return mutation;
};
