import { useInfiniteQuery } from '@tanstack/react-query';
import { getRecommendedProductsAPI } from 'src/apis/productAPI';
import { RecommendedProductType } from 'src/types/products';
import { RecommendedProductsRequest } from 'src/types/request';
import { QUERY_KEY_RECOMMENED_PRODUCT } from './queryKeys';

export const useRecommendedProductsQuery = (request: RecommendedProductsRequest) => {
  const { limit } = request;

  const query = useInfiniteQuery({
    queryKey: QUERY_KEY_RECOMMENED_PRODUCT.RECOMMENDED_PRODUCT_LIST(request.recommendCode),
    enabled: !isNaN(request.recommendCode),
    initialPageParam: 0,
    queryFn: ({ pageParam }) => getRecommendedProductsAPI({ ...request, offset: pageParam, limit: pageParam + limit }),
    getNextPageParam: (lastPage: RecommendedProductType[], allPages: RecommendedProductType[][]) => {
      const allLength = allPages.flat().length;
      const nextOffset = lastPage.length === limit ? allLength : undefined;

      return nextOffset;
    },
    select: (data) => data.pages.flat(),
  });

  return query;
};
