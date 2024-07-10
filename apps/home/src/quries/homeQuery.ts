import { useQuery } from '@tanstack/react-query';
import { getBannersAPI, getFeedsAPI, getGatesAPI } from 'src/apis/homeAPI';

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
