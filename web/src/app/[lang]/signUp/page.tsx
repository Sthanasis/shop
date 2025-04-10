import { verifySession } from '@/features/identity/actions/verifySession';
import RegisterForm from '@/features/identity/components/RegisterForm';
import { AppRoutes } from '@/shared/constants/appRoutes';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const { isAuth } = await verifySession();
  if (isAuth) redirect(AppRoutes.Home);

  return (
    <RegisterForm
      title="Sign Up"
      ctaText="Submit"
      loginText="Sign In"
      emailErrorField={'email wrong'}
      confirmPasswordErrorField={'confirm wrong'}
      passwordErrorField={'password wrong'}
    />
  );
}
