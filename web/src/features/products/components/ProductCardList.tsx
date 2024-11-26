import Link from 'next/link';
import { ProductResponse } from '../types/productResponse';
import ProductCard from './ProductCard';
import { AppRoutes } from '@/shared/constants/appRoutes';

const ProductCardList = ({ products }: { products: ProductResponse[] }) => (
  <section>
    <h1 className="text-2xl font-bold mb-2">Products</h1>
    <div className="flex gap-4 flex-wrap justify-center sm:justify-normal">
      {products.map((product) => (
        <Link
          className="flex w-full md:w-auto"
          key={product.id}
          href={AppRoutes.ProductId(product.id)}
        >
          <ProductCard
            key={product.id}
            category={product.category}
            images={product.images}
            name={product.name}
            price={product.price}
            rating={product.ratingPercentage}
            reviewsCount={product.reviewsCount}
            description={product.category}
          />
        </Link>
      ))}
    </div>
  </section>
);

export default ProductCardList;
