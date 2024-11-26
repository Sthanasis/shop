import { ReviewResponse } from '../types/reviewResponse';

export default function generateReviewProgress(reviews: ReviewResponse[]) {
  const map = new Map([
    [1, { total: 0, percentage: 0 }],
    [2, { total: 0, percentage: 0 }],
    [3, { total: 0, percentage: 0 }],
    [4, { total: 0, percentage: 0 }],
    [5, { total: 0, percentage: 0 }],
  ]);
  reviews.forEach((review) => {
    map.set(review.score, {
      total: (map.get(review.score)?.total ?? 0) + 1,
      percentage: 0,
    });
  });
  map.forEach((value, key, map) => {
    map.set(key, {
      total: map.get(key)?.total ?? 0,
      percentage: Math.ceil(
        ((map.get(key)?.total ?? 0) * 100) / reviews.length
      ),
    });
  });
  return map;
}
