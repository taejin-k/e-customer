import {
  HTTP_METHOD,
  HTTP_STATUS_CODE,
  RESPONSE_MESSAGE,
  _1_SECOND,
  delay,
  readJSON,
  withFilter,
} from '@29cm/utils-common';
import fsPromises from 'fs/promises';
import path from 'path';

type BodyParams = {
  productNo: number[];
};

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
  async (req, res) => {
    try {
      await delay(_1_SECOND);

      const cartList: CartTypes[] = await readJSON(DATABASE_PATH, []);
      const productNo = req.body.productNo;

      const isExistsProduct = cartList.some((cart) => productNo === cart.productNo);

      if (!isExistsProduct) {
        return res.status(HTTP_STATUS_CODE.FORBIDDEN).json({
          message: RESPONSE_MESSAGE.FAILURE,
          code: null,
          data: null,
          errors: {
            code: HTTP_STATUS_CODE.FORBIDDEN,
            message: '삭제할 상품이 카트에 없어요.',
          },
        });
      }

      const filteredCartList = cartList.filter((cart) => productNo !== cart.productNo);
      const updatedData = JSON.stringify(filteredCartList);
      await fsPromises.writeFile(DATABASE_PATH, updatedData);

      return res
        .status(HTTP_STATUS_CODE.OK)
        .json({ message: RESPONSE_MESSAGE.SUCCESS, code: HTTP_STATUS_CODE.OK, data: filteredCartList, errors: null });
    } catch (error) {
      await fsPromises.writeFile(DATABASE_PATH, []);

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
  { methodWhiteList: [HTTP_METHOD.POST] },
);

export default handler;
