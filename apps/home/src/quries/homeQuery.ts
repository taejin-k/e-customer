import { useQuery } from '@tanstack/react-query';
import { getBannersAPI, getFeedsAPI, getGatesAPI } from 'src/apis/homeAPI';
import { BannerType, FeedType, GateType } from 'src/types/home';

export const useBannersQuery = () => {
  const query = useQuery<BannerType[]>({
    queryKey: ['banners'],
    queryFn: () => getBannersAPI(),
  });

  return query;
};

export const useGatesQuery = () => {
  const query = useQuery<GateType[]>({
    queryKey: ['gates'],
    queryFn: () => getGatesAPI(),
  });

  return query;
};

export const useFeedsQuery = () => {
  const query = useQuery<FeedType[]>({
    queryKey: ['feeds'],
    queryFn: () => getFeedsAPI(),
  });

  return query;
};
