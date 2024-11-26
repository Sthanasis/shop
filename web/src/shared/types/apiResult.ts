import { ApiError } from './apiError';

export type ApiResult<T = null> =
  | {
      data: T;
      error?: ApiError;
    }
  | {
      data?: T;
      error: ApiError;
    };
