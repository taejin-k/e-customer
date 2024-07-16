import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  addCartAPI,
  getCartsAPI,
  getCouponsAPI,
  getRecommendedProductsAPI,
  modifyCartAPI,
  removeCartAPI,
} from 'src/apis/orderAPI';
import { CartType } from 'src/types/order';
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

export const useModifyCartMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (request: ModifyCartRequest) => modifyCartAPI(request),
    onMutate: async (request) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEY_CART.CART_LIST });

      const previousData = queryClient.getQueryData(QUERY_KEY_CART.CART_LIST);

      queryClient.setQueryData(QUERY_KEY_CART.CART_LIST, (oldDatas: CartType[]) =>
        oldDatas.map((data) => (data.productNo === request.productNo ? { ...data, count: request.count } : data)),
      );

      return { previousData };
    },
    onError: (err, removedItem, context) => {
      if (context) {
        queryClient.setQueryData(QUERY_KEY_CART.CART_LIST, context.previousData);
        alert('카트를 수정하는 중 오류가 발생했습니다.');
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY_CART.CART_LIST });
    },
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
