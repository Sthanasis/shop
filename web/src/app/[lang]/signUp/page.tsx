import RegisterForm from '@/features/identity/components/RegisterForm';
import { AppLocale } from '@/shared/types/appLocale';
import { getDictionary } from '@/shared/utilities/getDictionaries';

export default async function Page({
  params,
}: {
  params: Promise<{ lang: AppLocale }>;
}) {
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
