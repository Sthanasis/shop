import { BASE_API } from '@/shared/constants/baseApi';
import { REVIEWS_ENDPOINTS } from '../constants/reviewsEndpoints';
import { appFetch } from '@/shared/utilities/appFetch';
import { ReviewResponse } from '../types/reviewResponse';

async function fetchReviewByProductId(productId: string) {
  return await appFetch<ReviewResponse[]>(
    `${BASE_API}/${REVIEWS_ENDPOINTS.productId(productId)}`
  );
}

const reviewService = { fetchReviewByProductId };

export default reviewService;
