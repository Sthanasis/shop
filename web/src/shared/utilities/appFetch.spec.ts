import { appFetch } from './appFetch';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  })
) as jest.Mock;

describe('appFetch', () => {
  const mockData = 'test';
  const mockErrorMessage = 'error';
  test('successfull request', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: mockData }),
        ok: true,
      })
    ) as jest.Mock;
    const result = await appFetch<string>('/test');
    expect(result).toBe(mockData);
  });
  test('failed request', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ error: { message: mockErrorMessage } }),
        ok: false,
      })
    ) as jest.Mock;

    expect(async () => {
      await appFetch('/test');
    }).rejects.toThrow();
  });
});
