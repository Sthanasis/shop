'use client';

import Button from '@/shared/components/button/Button';
import TextField from '@/shared/components/textField/TextField';
import { AppRoutes } from '@/shared/constants/appRoutes';
import { useRouter } from 'next/navigation';
import login from '@/features/identity/actions/login';
import { useActionState } from 'react';

interface LoginFormProps {
  title: string;
  registerText: string;
  ctaText: string;
}

export default function LoginForm({
  title,
  ctaText,
  registerText,
}: LoginFormProps) {
  const router = useRouter();
  const [state, formAction] = useActionState(login, {
    token: '',
    error: undefined,
  });
  return (
    <div className="w-full h-full">
      <form
        className="grid gap-3 bg-snow-white p-4 max-w-[480px] m-auto border rounded-md"
        action={formAction}
      >
        <h1 className="text-lg font-bold">{title}</h1>
        <TextField name="username" label="Username" />
        <TextField name="password" label="Password" type="password" />
        <div className="flex justify-between">
          <Button color="primary" onClick={() => router.push(AppRoutes.SignUp)}>
            {registerText}
          </Button>
          <Button type="submit" color="primary" variant="filled">
            {ctaText}
          </Button>
        </div>
      </form>
      Error:
      <pre>{state.error}</pre>
      Token:
      <pre>{state.token}</pre>
    </div>
  );
}
