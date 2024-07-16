import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addCartAPI, getBannersAPI, getCartsAPI, getFeedsAPI, getGatesAPI, removeCartAPI } from 'src/apis/homeAPI';
import { CartType } from 'src/types/home';
import { AddCartRequest, RemoveCartRequest } from 'src/types/request';
import { QUERY_KEY_BANNER, QUERY_KEY_CART, QUERY_KEY_FEED, QUERY_KEY_GATE } from './queryKeys';

export const useBannersQuery = () => {
  const query = useQuery({
    queryKey: QUERY_KEY_BANNER.BANNER_LIST,
    queryFn: () => getBannersAPI(),
  });

  return query;
};

export const useGatesQuery = () => {
  const query = useQuery({
    queryKey: QUERY_KEY_GATE.GATE_LIST,
    queryFn: () => getGatesAPI(),
  });

  return query;
};

export const useFeedsQuery = () => {
  const query = useQuery({
    queryKey: QUERY_KEY_FEED.FEED_LIST,
    queryFn: () => getFeedsAPI(),
  });

  return query;
};

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
      }
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
      }
    },
  });

  return mutation;
};
