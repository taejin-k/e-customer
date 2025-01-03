import { HTTP_METHOD, HTTP_STATUS_CODE, RESPONSE_MESSAGE, readJSON, withFilter } from '@eCustomer/utils-common';
import fsPromises from 'fs/promises';
import path from 'path';

type BodyParams = {
  productNo: number;
  count: number;
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
      const cartList: CartTypes[] = await readJSON(DATABASE_PATH, []);
      const { productNo, count } = req.body;

      const isExistsProduct = cartList.some((cart) => cart.productNo === productNo);
      if (!isExistsProduct) {
        return res.status(HTTP_STATUS_CODE.FORBIDDEN).json({
          message: RESPONSE_MESSAGE.FAILURE,
          code: null,
          data: null,
          errors: {
            code: HTTP_STATUS_CODE.FORBIDDEN,
            message: '카트에 담은 상품인지 확인해주세요.',
          },
        });
      }

      const updatedCartList = cartList.map((cart) => ({
        ...cart,
        count: cart.productNo === productNo ? count : cart.count,
      }));
      const updatedData = JSON.stringify(updatedCartList);
      await fsPromises.writeFile(DATABASE_PATH, updatedData);

      return res.status(HTTP_STATUS_CODE.OK).json({
        message: RESPONSE_MESSAGE.SUCCESS,
        code: HTTP_STATUS_CODE.OK,
        data: updatedCartList,
        errors: null,
      });
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
    methodWhiteList: [HTTP_METHOD.PUT],
  },
);

export default handler;
