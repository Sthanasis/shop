import { ProductReviewProps } from '../types/productReviewProps';
import { ReviewResponse } from '../types/reviewResponse';

export function mapReviewResponse(
  reviews: ReviewResponse[]
): ProductReviewProps[] {
  // TODO: ADD REVIEWER NAME
  return reviews.map((review) => ({
    id: review.id,
    reviewer: 'User',
    score: review.score,
    text: review.text,
  }));
}
