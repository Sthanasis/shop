import { apiRequest } from './apiRequest';

describe('apiRequest', () => {
  const mockData = 'test';
  const mockErrorMessage = 'error';
  const mockPromise = () => Promise.resolve(mockData);
  const mockError = () => {
    throw Error(mockErrorMessage);
  };
  test('successfull request', async () => {
    const result = await apiRequest<string>(mockPromise);
    expect(result.data).toBe(mockData);
  });
  test('failed request', async () => {
    const result = await apiRequest(mockError);
    expect(result.error).toStrictEqual({ message: mockErrorMessage });
  });
});
