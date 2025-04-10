import { verifySession } from '@/features/identity/actions/verifySession';
import LoginForm from '@/features/identity/components/LoginForm';
import { AppRoutes } from '@/shared/constants/appRoutes';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const { isAuth } = await verifySession();
  if (isAuth) redirect(AppRoutes.Home);
  return <LoginForm title="Sign In" ctaText="Submit" registerText="Sign Up" />;
}
