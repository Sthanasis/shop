import { AppRoutes } from '@/shared/constants/appRoutes';

export function createRouteConfig({
  home,
  about,
  products,
}: {
  home: string;
  about: string;
  products: string;
}) {
  return [
    { name: home, href: AppRoutes.Home },
    { name: about, href: AppRoutes.About },
    { name: products, href: AppRoutes.Products },
  ];
}
