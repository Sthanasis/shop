import { ApiResult } from '../types/apiResult';
import { ApiError } from '../types/apiError';

export async function apiRequest<T>(
  fn: () => Promise<T>
): Promise<ApiResult<T>> {
  try {
    return { data: await fn(), error: undefined };
  } catch (err: unknown) {
    return { error: { message: (err as ApiError).message } };
  }
}
