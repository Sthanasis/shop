import { getDictionary } from '@/shared/utilities/getDictionaries';
import productService from '@/features/products/api';
import reviewService from '@/features/products/api/reviewService';
import ProductGrid from '@/features/products/components/ProductGrid';
import ProductImageList from '@/features/products/components/ProductImageList';
import ProductInfo from '@/features/products/components/ProductInfo';
import ProductReviewList from '@/features/products/components/reviews/ProductReviewList';
import ProductReviewListHeader from '@/features/products/components/reviews/ProductReviewListHeader';
import { mapReviewResponse } from '@/features/products/mappers/mapReviewResponse';
import generateReviewProgress from '@/features/products/utilities/generateReviewProgress';
import { AppLocale } from '@/shared/types/appLocale';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; lang: AppLocale }>;
}) {
  const { id, lang } = await params;
  const dict = await getDictionary(lang);
  const product = await productService.fetchProductById(id);
  const reviews = await reviewService.fetchReviewByProductId(id);
  const config = generateReviewProgress(reviews);
  return (
    <ProductGrid
      images={
        <ProductImageList
          images={product.images.map((img, i) => ({ id: i, url: img }))}
        />
      }
      info={
        <ProductInfo
          category={product.category}
          description={product.description}
          price={product.price + ' $'}
          title={product.name}
          ratingCount={product.reviewsCount}
          ratingPercentage={product.ratingPercentage}
        />
      }
      reviews={
        <ProductReviewList reviews={mapReviewResponse(reviews)}>
          <ProductReviewListHeader
            total={product.rating.toFixed(1)}
            percentage={product.ratingPercentage}
            reviewsMap={config}
            ctaText={dict.review.add}
            starsText={dict.review.stars}
            title={dict.review.title}
          />
        </ProductReviewList>
      }
    ></ProductGrid>
  );
}
