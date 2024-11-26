'use client';

import Button from '@/shared/components/button/Button';
import ProductReviewStars from './reviews/ProductReviewStars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

interface ProductInfoProps {
  category: string;
  price: string;
  description: string;
  title: string;
  ratingPercentage: number;
  ratingCount: number;
}

export default function ProductInfo({
  category,
  description,
  price,
  title,
  ratingPercentage,
  ratingCount,
}: ProductInfoProps) {
  return (
    <section className="flex gap-4 flex-col text-sm">
      <h2 className="font-bold text-2xl">{title}</h2>
      <div>
        <div className="flex h-5 gap-2">
          <ProductReviewStars totalPercentage={ratingPercentage} />
          <span className="tracking-wide text-slate-gray before:content-['('] after:content-[')']">
            {ratingCount}
          </span>
        </div>
        <div className="font-thin tracking-wider flex gap-2">
          <span>{category}</span>
        </div>
      </div>
      <p className="text-lg">{description}</p>
      <div className="rounded-md border border-slate-gray bg-snow-white px-6 py-4 flex flex-col gap-4">
        <h3 className="font-bold text-xl">{price}</h3>
        <span>Delivered on</span>
        <span className="font-bold">Transfer fee</span>
        <div className="flex gap-2">
          <Button full variant="filled" color="primary">
            ADD TO CART
          </Button>
          <Button variant="outlined" ariaLabel="favorite button">
            <FontAwesomeIcon icon={faHeart} />
          </Button>
        </div>
      </div>
    </section>
  );
}
