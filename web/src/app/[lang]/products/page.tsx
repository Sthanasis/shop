import productService from '@/features/products/api';
import ProductCardList from '@/features/products/components/ProductCardList';

export default async function Products() {
  const products = await productService.fetchAllProducts();
  return <ProductCardList products={products} />;
}
