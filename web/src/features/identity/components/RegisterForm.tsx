'use client';

import Button from '@/shared/components/button/Button';
import TextField from '@/shared/components/textField/TextField';
import { AppRoutes } from '@/shared/constants/appRoutes';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  emailValidator,
  passwordValidator,
  confirmPasswordValidator,
} from '@/features/identity/utilities/formValidators';

interface RegisterFormProps {
  title: string;
  loginText: string;
  ctaText: string;
  emailErrorField: string;
  passwordErrorField: string;
  confirmPasswordErrorField: string;
}

export default function RegisterFrom({
  title,
  ctaText,
  loginText,
  confirmPasswordErrorField,
  emailErrorField,
  passwordErrorField,
}: RegisterFormProps) {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('username', email);
    formData.append('username', password);
    formData.append('username', confirmPassword);
  }
  return (
    <div className="w-full h-full">
      <form
        className="grid gap-3 bg-snow-white p-4 max-w-[480px] m-auto border rounded-md"
        onSubmit={handleSubmitForm}
      >
        <h1 className="text-lg font-bold">{title}</h1>
        <TextField
          label="Email"
          onValidate={(value) => emailValidator(value, emailErrorField)}
          onChange={(value) => setEmail(value)}
        />
        <TextField label="Username" onChange={(value) => setUsername(value)} />
        <TextField
          label="Password"
          type="password"
          onValidate={(value) => passwordValidator(value, passwordErrorField)}
          onChange={(value) => setPassword(value)}
        />
        <TextField
          label="Confirm Password"
          type="password"
          onValidate={(value) =>
            confirmPasswordValidator(password, value, confirmPasswordErrorField)
          }
          onChange={(value) => setConfirmPassword(value)}
        />
        <div className="flex justify-between">
          <Button color="primary" onClick={() => router.push(AppRoutes.SignIn)}>
            {loginText}
          </Button>
          <Button type="submit" color="primary" variant="filled">
            {ctaText}
          </Button>
        </div>
      </form>
    </div>
  );
}
