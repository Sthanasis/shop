'use server';
import identityService from '@/features/identity/api/identityService';

export default async function login(
  state: { token?: string; error?: string },
  formData: FormData
) {
  const data = new FormData();
  data.append(
    'userNameOrEmail',
    formData.get('username')?.toString() as string
  );
  data.append('password', formData.get('password')?.toString() as string);
  try {
    const result = await identityService.login(data);
    return { token: result };
  } catch (err) {
    return { error: `${err}` };
  }
}
