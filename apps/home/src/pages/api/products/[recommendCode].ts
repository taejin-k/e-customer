import { products } from '@eCustomer/mocks-data';
import { HTTP_METHOD, HTTP_STATUS_CODE, RESPONSE_MESSAGE, _1_SECOND, delay, withFilter } from '@eCustomer/utils-common';
import type { NextApiRequest } from 'next';

const ALL_PRODUCTS_CODE = 0;
const TOTAL_PRODUCTS_COUNT = 209;

const handler = withFilter<typeof products>(
  async (req, res) => {
    const { code, offset, limit, sort } = getParsedQueryParameter(req.query);

    await delay(_1_SECOND / 2);

    if (offset < 0 || limit - offset < 0) {
      return res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({
        message: RESPONSE_MESSAGE.FAILURE,
        code: null,
        data: null,
        errors: { code: HTTP_STATUS_CODE.BAD_REQUEST, message: '요청한 상품 개수를 확인해주세요.' },
      });
    }

    if (limit - offset > 21) {
      return res.status(HTTP_STATUS_CODE.PAYLOAD_TOO_LARGE).json({
        message: RESPONSE_MESSAGE.FAILURE,
        code: null,
        data: null,
        errors: { code: HTTP_STATUS_CODE.PAYLOAD_TOO_LARGE, message: '요청한 데이터가 너무 많습니다.' },
      });
    }

    const recommendProducts =
      code === ALL_PRODUCTS_CODE ? products : products.filter(({ recommendCode }) => recommendCode === code);

    if (recommendProducts.length === 0) {
      return res.status(HTTP_STATUS_CODE.NOT_FOUND).json({
        message: RESPONSE_MESSAGE.FAILURE,
        code: null,
        data: null,
        errors: { code: HTTP_STATUS_CODE.NOT_FOUND, message: '요청된 추천 코드와 일치하는 상품이 없습니다.' },
      });
    }

    const pagingProducts = recommendProducts.slice(offset, limit);
    const sortedProducts = pagingProducts.toSorted((prev, next) =>
      sort === 'DESC' ? next.priorityScore - prev.priorityScore : prev.priorityScore - next.priorityScore,
    );

    return res.status(HTTP_STATUS_CODE.OK).json({
      message: RESPONSE_MESSAGE.SUCCESS,
      code: HTTP_STATUS_CODE.OK,
      data: sortedProducts,
      errors: null,
    });
  },
  { methodWhiteList: [HTTP_METHOD.GET], accessQuery: true },
);

export default handler;

const getParsedQueryParameter = (query: NextApiRequest['query']) => {
  const $code = Number(query.recommendCode);
  const $offset = Number(query.offset);
  const $limit = Number(query.limit);
  const $sort = query.sort;

  return {
    code: isNaN($code) ? -1 : $code,
    offset: isNaN($offset) ? 0 : $offset,
    limit: isNaN($limit) ? TOTAL_PRODUCTS_COUNT : $limit,
    sort: !$sort ? 'ASC' : $sort,
  };
};
