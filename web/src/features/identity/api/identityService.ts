import { BASE_API } from '@/shared/constants/baseApi';
import { appFetch } from '@/shared/utilities/appFetch';
import { IDENTITY_ENDPOINTS } from '@/features/identity/constants/identityEndpoints';

async function login(formData: FormData) {
  return await appFetch<string>(`${BASE_API}/${IDENTITY_ENDPOINTS.login}`, {
    body: formData,
    method: 'POST',
  });
}

async function validateCookie() {
  return await appFetch(`${BASE_API}/${IDENTITY_ENDPOINTS.session}`);
}

const identityService = { login, validateCookie };

export default identityService;
