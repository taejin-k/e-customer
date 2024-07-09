import type { NextApiRequest as BaseNextApiRequest, NextApiResponse } from 'next';
import { HTTP_STATUS_CODE } from './with-filter.const';

export type ResponseType<D> =
  | {
      message: 'SUCCESS';
      code: (typeof HTTP_STATUS_CODE)[keyof typeof HTTP_STATUS_CODE];
      data: D;
      errors: null;
    }
  | {
      message: 'FAILURE';
      code: null;
      data: null;
      errors: {
        code: number;
        message: string;
      };
    };

export type HTTPMethodKeys = 'CONNECT' | 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | 'TRACE';

type NextApiRequest = BaseNextApiRequest & { method: HTTPMethodKeys };

export type WithFilter = <DataTypes>(
  handler: (req: NextApiRequest, res: NextApiResponse<ResponseType<DataTypes>>) => void,
  options?: { methodWhiteList?: HTTPMethodKeys[]; accessQuery?: boolean; ignoreRandomError?: boolean },
) => (req: NextApiRequest, res: NextApiResponse<ResponseType<DataTypes>>) => Promise<void>;
