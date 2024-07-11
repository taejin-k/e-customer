import { useQuery } from '@tanstack/react-query';
import { getRecommendedProductsAPI } from 'src/apis/productAPI';
import { RecommendedProductsRequest } from 'src/types/request';
import { QUERY_KEY_PRODUCT } from './queryKeys';

export const useRecommendedProductsQuery = (request: RecommendedProductsRequest) => {
  const query = useQuery({
    queryKey: QUERY_KEY_PRODUCT.PRODUCT_LIST(request.recommendCode),
    queryFn: () => getRecommendedProductsAPI(request),
    enabled: !isNaN(request.recommendCode),
  });

  return query;
};
