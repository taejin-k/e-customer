import { _1_SECOND, delay } from '../delay';
import { randomNumber } from '../randomNumber';
import {
  HTTP_METHOD,
  HTTP_STATUS_CODE,
  RESPONSE_BAD_REQUEST,
  RESPONSE_NOT_FOUND,
  RESPONSE_NOT_METHOD_ALLOWED,
  RESPONSE_REQUEST_TIMEOUT,
} from './with-filter.const';
import type { WithFilter } from './with-filter.types';

const DIGITS = 10;

const INITIAL_COUNT = 1;

const CONDITIONAL_COUNT = 5;

const _3_SECOND = _1_SECOND * 3;

export const withFilter: WithFilter =
  (handler, options = {}) =>
  async (req, res) => {
    const { url, method = HTTP_METHOD.GET } = req;
    const { methodWhiteList = [], accessQuery = false, ignoreRandomError = true } = options;

    if (!url) {
      return res.status(HTTP_STATUS_CODE.NOT_FOUND).json(RESPONSE_NOT_FOUND);
    }

    if (!ignoreRandomError && randomNumber(DIGITS, INITIAL_COUNT) > CONDITIONAL_COUNT) {
      await delay(_3_SECOND);

      return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json(RESPONSE_REQUEST_TIMEOUT);
    }

    if (!accessQuery && Object.keys(req.query).length > 0) {
      return res.status(HTTP_STATUS_CODE.BAD_REQUEST).json(RESPONSE_BAD_REQUEST);
    }

    if (methodWhiteList && methodWhiteList.includes(method)) {
      return handler(req, res);
    }

    return res.status(HTTP_STATUS_CODE.NOT_METHOD_ALLOWED).json(RESPONSE_NOT_METHOD_ALLOWED);
  };
