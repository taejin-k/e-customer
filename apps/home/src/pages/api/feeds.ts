import { feeds } from '@29cm/mocks-data';
import { HTTP_METHOD, HTTP_STATUS_CODE, RESPONSE_MESSAGE, _1_SECOND, delay, withFilter } from '@29cm/utils-common';

const handler = withFilter<typeof feeds>(
  async (_, res) => {
    await delay(_1_SECOND);

    return res
      .status(HTTP_STATUS_CODE.OK)
      .json({ message: RESPONSE_MESSAGE.SUCCESS, code: HTTP_STATUS_CODE.OK, data: feeds, errors: null });
  },
  { methodWhiteList: [HTTP_METHOD.GET] },
);

export default handler;
