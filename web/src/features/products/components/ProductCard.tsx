'use client';

import Button from '@/shared/components/button/Button';
import Image from 'next/image';
import ProductReviewStars from './reviews/ProductReviewStars';

interface ProductProps {
  name: string;
  images: string[];
  description: string;
  price: number;
  category: string;
  rating: number;
  reviewsCount: number;
}

const ProductCard = ({
  category,
  name,
  price,
  rating,
  images,
  reviewsCount,
  description,
}: ProductProps) => {
  return (
    <section
      className="rounded-md flex flex-col overflow-hidden bg-snow-white text-dark-steel w-full md:w-auto"
      role="button"
    >
      <div className="max-h-[200px]">
        <Image
          className="m-auto"
          src={images[0]}
          width={200}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
          priority
          alt={`Image of ${category}, named ${name}`}
        />
      </div>

      <div className="p-3 flex flex-col justify-between w-full bg-snow-white">
        <h2 className="font-bold text-xl">{name}</h2>
        <div className="flex flex-col gap-2">
          <p>{description}</p>
          <span className="font-serif text-lg text-primary">{price} $</span>
          <div className="flex items-center gap-2">
            <ProductReviewStars totalPercentage={rating} />
            <span className='before:content-["("] after:content-[")"] text-neutral-text'>
              {reviewsCount}
            </span>
          </div>

          <Button
            variant="filled"
            color="primary"
            onClick={(e) => e.preventDefault()}
          >
            ADD TO CART
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
