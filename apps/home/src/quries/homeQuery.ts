import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addCartAPI, getBannersAPI, getCartsAPI, getFeedsAPI, getGatesAPI, removeCartAPI } from 'src/apis/homeAPI';
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

export const useAddCartMutation = (onSuccess: () => void) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (request: AddCartRequest) => addCartAPI(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY_CART.CART_LIST });
      onSuccess();
    },
  });

  return mutation;
};

export const useRemoveCartMutation = (onSuccess: () => void) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (request: RemoveCartRequest) => removeCartAPI(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY_CART.CART_LIST });
      onSuccess();
    },
  });

  return mutation;
};
