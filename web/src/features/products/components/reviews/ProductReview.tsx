import { ProductReviewProps } from '../../types/productReviewProps';
import ProductReviewStars from './ProductReviewStars';

const MAX_STARS = 5;

export default function ProductReview({
  text,
  score,
  reviewer,
}: ProductReviewProps) {
  return (
    <div className="p-4 border flex flex-col gap-4 w-full bg-snow-white rounded-md">
      <div className="flex flex-col gap-2">
        <div className="h-5 flex gap-2 text-slate-gray">
          <ProductReviewStars totalPercentage={(score * 100) / MAX_STARS} />
          <span>({score}/5)</span>
        </div>
        <span>{reviewer}</span>
      </div>
      <p>{text}</p>
    </div>
  );
}
