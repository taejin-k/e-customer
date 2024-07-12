import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  addCartAPI,
  getCartsAPI,
  getCouponsAPI,
  getRecommendedProductsAPI,
  modifyCartAPI,
  removeCartAPI,
} from 'src/apis/orderAPI';
import { AddCartRequest, ModifyCartRequest, RemoveCartRequest } from 'src/types/request';
import { QUERY_KEY_CART, QUERY_KEY_COUPON, QUERY_KEY_RECOMMENED_PRODUCT } from './queryKeys';

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
    onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY_CART.CART_LIST }),
  });

  return mutation;
};

export const useRemoveCartMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (request: RemoveCartRequest) => removeCartAPI(request),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY_CART.CART_LIST }),
  });

  return mutation;
};

export const useModifyCartMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (request: ModifyCartRequest) => modifyCartAPI(request),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY_CART.CART_LIST }),
  });

  return mutation;
};

export const useRecommendedProductsQuery = (perPage: number) => {
  const query = useQuery({
    queryKey: QUERY_KEY_RECOMMENED_PRODUCT.RECOMMENDED_PRODUCT_LIST,
    queryFn: () => getRecommendedProductsAPI(),
    select: (data) => data.slice(0, perPage),
  });

  return query;
};

export const useCouponsQuery = () => {
  const query = useQuery({
    queryKey: QUERY_KEY_COUPON.COUPON_LIST,
    queryFn: () => getCouponsAPI(),
  });

  return query;
};
