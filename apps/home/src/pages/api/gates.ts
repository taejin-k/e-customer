import { gates } from '@eCustomer/mocks-data';
import { HTTP_METHOD, HTTP_STATUS_CODE, RESPONSE_MESSAGE, _1_SECOND, delay, withFilter } from '@eCustomer/utils-common';

const handler = withFilter<typeof gates>(
  async (_, res) => {
    await delay(_1_SECOND / 2);

    return res
      .status(HTTP_STATUS_CODE.OK)
      .json({ message: RESPONSE_MESSAGE.SUCCESS, code: HTTP_STATUS_CODE.OK, data: gates, errors: null });
  },
  { methodWhiteList: [HTTP_METHOD.GET] },
);

export default handler;
