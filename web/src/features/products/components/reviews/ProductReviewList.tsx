import { ProductReviewProps } from '../../types/productReviewProps';
import ProductReview from './ProductReview';

import { ReactNode } from 'react';

interface ProductReviewListProps {
  reviews: ProductReviewProps[];
  children: ReactNode;
}

export default function ProductReviewList({
  reviews,
  children,
}: ProductReviewListProps) {
  return (
    <section className="w-full">
      {children}
      <ul className="flex flex-col gap-4 w-full">
        {reviews.map((review) => (
          <li key={review.id}>
            <ProductReview {...review} />
          </li>
        ))}
      </ul>
    </section>
  );
}
