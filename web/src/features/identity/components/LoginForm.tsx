'use client';

import Button from '@/shared/components/button/Button';
import TextField from '@/shared/components/textField/TextField';
import { AppRoutes } from '@/shared/constants/appRoutes';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

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
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
  }
  return (
    <div className="w-full h-full">
      <form
        className="grid gap-3 bg-snow-white p-4 max-w-[480px] m-auto border rounded-md"
        onSubmit={handleSubmitForm}
      >
        <h1 className="text-lg font-bold">{title}</h1>
        <TextField label="Username" onChange={(value) => setUsername(value)} />
        <TextField
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
