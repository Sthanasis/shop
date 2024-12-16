export const AppRoutes = {
  Home: '/',
  About: '/about',
  Products: '/products',
  ProductId: (id: string) => `/products/${id}`,
  SignIn: '/signIn',
  SignUp: '/signUp',
  Profile: '/profile',
};
