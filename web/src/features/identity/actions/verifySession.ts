import 'server-only';
import { cache } from 'react';
import identityService from '@/features/identity/api/identityService';

export const verifySession = cache(async () => {
  let isAuth;
  try {
    await identityService.validateCookie();
    isAuth = true;
  } catch (err) {
    console.error(err);
    isAuth = false;
  } finally {
    return { isAuth };
  }
});
