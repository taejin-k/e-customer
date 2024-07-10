import { useMutation, useQuery } from '@tanstack/react-query';
import { addCartAPI, getBannersAPI, getCartsAPI, getFeedsAPI, getGatesAPI, removeCartAPI } from 'src/apis/homeAPI';
import { AddCartRequest, RemoveCartRequest } from 'src/types/request';

export const useBannersQuery = () => {
  const query = useQuery({
    queryKey: ['banners'],
    queryFn: () => getBannersAPI(),
  });

  return query;
};

export const useGatesQuery = () => {
  const query = useQuery({
    queryKey: ['gates'],
    queryFn: () => getGatesAPI(),
  });

  return query;
};

export const useFeedsQuery = () => {
  const query = useQuery({
    queryKey: ['feeds'],
    queryFn: () => getFeedsAPI(),
  });

  return query;
};

export const useCartsQuery = () => {
  const query = useQuery({
    queryKey: ['carts'],
    queryFn: () => getCartsAPI(),
  });

  return query;
};

export const useAddCartMutation = (onSuccess: () => void) => {
  const mutation = useMutation({
    mutationFn: (request: AddCartRequest) => addCartAPI(request),
    onSuccess,
  });

  return mutation;
};

export const useRemoveCartMutation = (onSuccess: () => void) => {
  const mutation = useMutation({
    mutationFn: (request: RemoveCartRequest) => removeCartAPI(request),
    onSuccess,
  });

  return mutation;
};
