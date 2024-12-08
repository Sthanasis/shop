'use server';
import identityService from '@/features/identity/api/identityService';
export default async function login(formData: FormData) {
  const data = new FormData();
  data.append(
    'userNameOrEmail',
    formData.get('username')?.toString() as string
  );
  data.append('password', formData.get('password')?.toString() as string);
  identityService.login(data);
}
