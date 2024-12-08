'use server';
import identityService from '@/features/identity/api/identityService';
import { createSession } from './createSession';
import { redirect } from 'next/navigation';

export default async function login(
  error: string | null | undefined,
  formData: FormData
) {
  const data = new FormData();
  data.append(
    'userNameOrEmail',
    formData.get('username')?.toString() as string
  );
  data.append('password', formData.get('password')?.toString() as string);
  try {
    const token = await identityService.login(data);
    await createSession(token);
  } catch (err) {
    return `${err}`;
  } finally {
    if (!error) redirect('/');
  }
}
