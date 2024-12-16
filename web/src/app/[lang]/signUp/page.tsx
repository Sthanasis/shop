import { verifySession } from '@/features/identity/actions/verifySession';
import RegisterForm from '@/features/identity/components/RegisterForm';
import { AppRoutes } from '@/shared/constants/appRoutes';
import { AppLocale } from '@/shared/types/appLocale';
import { getDictionary } from '@/shared/utilities/getDictionaries';
import { redirect } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: Promise<{ lang: AppLocale }>;
}) {
  const { isAuth } = await verifySession();
  if (isAuth) redirect(AppRoutes.Home);
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <RegisterForm
      title="Sign Up"
      ctaText="Submit"
      loginText="Sign In"
      emailErrorField={dict.errorMessages.email}
      confirmPasswordErrorField={dict.errorMessages.confirmPassword}
      passwordErrorField={dict.errorMessages.password}
    />
  );
}
