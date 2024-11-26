import { useDebounceListCleanup } from './useDebounceListCleanup';
import { renderHook } from '@testing-library/react';
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');
describe('useDebounceListCleanup', () => {
  test('creates timeouts as much as count but the callback is called once', async () => {
    const mockFn = jest.fn();
    let countProp = 1;
    const { rerender } = renderHook(() =>
      useDebounceListCleanup(countProp, 500, mockFn)
    );
    countProp++;
    rerender();
    expect(setTimeout).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalledTimes(countProp);
    expect(setTimeout).toHaveBeenCalledWith(mockFn, 500);
    jest.runAllTimers();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
