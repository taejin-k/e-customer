import {
  HTTP_METHOD,
  HTTP_STATUS_CODE,
  RESPONSE_MESSAGE,
  _1_SECOND,
  delay,
  readJSON,
  withFilter,
} from '@eCustomer/utils-common';
import fsPromises from 'fs/promises';
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
  async (req, res) => {
    try {
      await delay(_1_SECOND / 4);

      const cartList: CartTypes[] = await readJSON(DATABASE_PATH, []);
      const newProduct = req.body as CartTypes;

      const isExistsProduct = cartList.findIndex(({ productNo }) => productNo === newProduct.productNo);
      if (isExistsProduct > -1) {
        return res.status(HTTP_STATUS_CODE.FORBIDDEN).json({
          message: RESPONSE_MESSAGE.FAILURE,
          code: null,
          data: null,
          errors: {
            code: HTTP_STATUS_CODE.FORBIDDEN,
            message: '이미 카트에 담은 상품입니다.',
          },
        });
      }

      const addedCartList = [...cartList, newProduct];
      const updatedData = JSON.stringify(addedCartList);
      await fsPromises.writeFile(DATABASE_PATH, updatedData);

      return res
        .status(HTTP_STATUS_CODE.CREATED)
        .json({ message: RESPONSE_MESSAGE.SUCCESS, code: HTTP_STATUS_CODE.CREATED, data: addedCartList, errors: null });
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
  {
    methodWhiteList: [HTTP_METHOD.POST],
  },
);

export default handler;
