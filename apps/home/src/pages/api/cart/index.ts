import {
  HTTP_METHOD,
  HTTP_STATUS_CODE,
  RESPONSE_MESSAGE,
  _1_SECOND,
  delay,
  readJSON,
  withFilter,
} from '@29cm/utils-common';
import path from 'path';

type CartTypes = {
  productNo: number;
  productName: string;
  price: number;
  imageUrl: string;
  availableCoupon: boolean;
  priorityScore: number;
  recommendCode: number;
  count: number;
};

const DATABASE_PATH = path.join(process.cwd(), '../../packages/mocks/database/index.json');

const handler = withFilter<CartTypes[]>(
  async (_, res) => {
    try {
      await delay(_1_SECOND);

      const cartList = await readJSON(DATABASE_PATH, []);

      return res
        .status(HTTP_STATUS_CODE.OK)
        .json({ message: RESPONSE_MESSAGE.SUCCESS, code: HTTP_STATUS_CODE.OK, data: cartList, errors: null });
    } catch (error) {
      return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
        message: RESPONSE_MESSAGE.FAILURE,
        code: null,
        data: null,
        errors: {
          code: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
          message: `확인되지 않은 에러가 발생했습니다 : ${JSON.stringify(error)}`,
        },
      });
    }
  },
  { methodWhiteList: [HTTP_METHOD.GET] },
);

export default handler;
