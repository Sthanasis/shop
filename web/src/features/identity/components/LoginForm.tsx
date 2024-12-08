'use client';

import Button from '@/shared/components/button/Button';
import TextField from '@/shared/components/textField/TextField';
import { AppRoutes } from '@/shared/constants/appRoutes';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import login from '@/features/identity/actions/login';

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
  const [, setUsername] = useState<string>('');
  const [, setPassword] = useState<string>('');

  return (
    <div className="w-full h-full">
      <form
        className="grid gap-3 bg-snow-white p-4 max-w-[480px] m-auto border rounded-md"
        action={login}
      >
        <h1 className="text-lg font-bold">{title}</h1>
        <TextField
          name="username"
          label="Username"
          onChange={(value) => setUsername(value)}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          onChange={(value) => setPassword(value)}
        />
        <div className="flex justify-between">
          <Button color="primary" onClick={() => router.push(AppRoutes.SignUp)}>
            {registerText}
          </Button>
          <Button type="submit" color="primary" variant="filled">
            {ctaText}
          </Button>
        </div>
      </form>
    </div>
  );
}
