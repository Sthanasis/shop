import { BASE_API } from '@/shared/constants/baseApi';
import { PRODUCT_ENDPOINTS } from '../constants/productEndpoints';
import { ProductResponse } from '../types/productResponse';
import { appFetch } from '@/shared/utilities/appFetch';

async function fetchAllProducts() {
  return await appFetch<ProductResponse[]>(
    `${BASE_API}/${PRODUCT_ENDPOINTS.products}/`
  );
}

async function fetchProductById(productId: string) {
  return await appFetch<ProductResponse>(
    `${BASE_API}/${PRODUCT_ENDPOINTS.productId(productId)}`
  );
}

const productService = { fetchAllProducts, fetchProductById };

export default productService;
